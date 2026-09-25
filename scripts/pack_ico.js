const fs = require('fs');
const path = require('path');

function createIco(pngBuffers, sizes) {
  // ICONDIR header: 6 bytes
  // 2 bytes reserved (0), 2 bytes image type (1 for ico), 2 bytes image count
  const count = pngBuffers.length;
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(count, 4);

  let offset = 6 + (16 * count);
  const directoryEntries = [];

  for (let i = 0; i < count; i++) {
    const buf = pngBuffers[i];
    const size = sizes[i];
    const entry = Buffer.alloc(16);
    entry.writeUInt8(size >= 256 ? 0 : size, 0); // width
    entry.writeUInt8(size >= 256 ? 0 : size, 1); // height
    entry.writeUInt8(0, 2); // color count
    entry.writeUInt8(0, 3); // reserved
    entry.writeUInt16LE(1, 4); // planes
    entry.writeUInt16LE(32, 6); // bit count
    entry.writeUInt32LE(buf.length, 8); // bytes in resource
    entry.writeUInt32LE(offset, 12); // image offset

    directoryEntries.push(entry);
    offset += buf.length;
  }

  return Buffer.concat([header, ...directoryEntries, ...pngBuffers]);
}

const p16 = fs.readFileSync(path.join(__dirname, '../public/favicon-16x16.png'));
const p32 = fs.readFileSync(path.join(__dirname, '../public/favicon-32x32.png'));
const p48 = fs.readFileSync(path.join(__dirname, '../public/favicon-48x48.png'));

const icoBuffer = createIco([p16, p32, p48], [16, 32, 48]);

fs.writeFileSync(path.join(__dirname, '../public/favicon.ico'), icoBuffer);
fs.writeFileSync(path.join(__dirname, '../src/app/favicon.ico'), icoBuffer);

console.log('Successfully wrote multi-size favicon.ico (16x16, 32x32, 48x48) to public/ and src/app/! Total size:', icoBuffer.length);
