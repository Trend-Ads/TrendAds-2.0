import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  try {
    const filePath = path.join(
      process.cwd(),
      "public",
      "pdfs",
      "Website Auditing, SEO & UX - The Practical Guide - Trend Ads.pdf"
    );

    if (!fs.existsSync(filePath)) {
      return new NextResponse("File not found", { status: 404 });
    }

    const fileBuffer = fs.readFileSync(filePath);

    return new NextResponse(fileBuffer, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition":
          'attachment; filename="Website Auditing, SEO & UX - The Practical Guide - Trend Ads.pdf"',
        "Content-Length": fileBuffer.length.toString(),
        "Cache-Control": "no-cache, no-store, must-revalidate",
      },
    });
  } catch (error) {
    console.error("Download error:", error);
    return new NextResponse("Internal server error", { status: 500 });
  }
}
