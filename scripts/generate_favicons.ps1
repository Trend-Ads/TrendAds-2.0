Add-Type -AssemblyName System.Drawing

function Create-SquareFavicon {
    param (
        [string]$SourcePath,
        [string]$TargetPath,
        [int]$Size,
        [double]$PaddingRatio = 0.06
    )

    $src = [System.Drawing.Bitmap]::FromFile($SourcePath)
    $dest = New-Object System.Drawing.Bitmap($Size, $Size, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
    $g = [System.Drawing.Graphics]::FromImage($dest)

    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
    $g.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality
    $g.Clear([System.Drawing.Color]::Transparent)

    $pad = [int]($Size * $PaddingRatio)
    $availSize = $Size - ($pad * 2)

    $srcW = $src.Width
    $srcH = $src.Height
    $scale = [Math]::Min($availSize / $srcW, $availSize / $srcH)

    $drawW = [int]($srcW * $scale)
    $drawH = [int]($srcH * $scale)
    $drawX = $pad + [int](($availSize - $drawW) / 2)
    $drawY = $pad + [int](($availSize - $drawH) / 2)

    $rect = New-Object System.Drawing.Rectangle($drawX, $drawY, $drawW, $drawH)
    $g.DrawImage($src, $rect)

    $dest.Save($TargetPath, [System.Drawing.Imaging.ImageFormat]::Png)

    $g.Dispose()
    $dest.Dispose()
    $src.Dispose()
    Write-Host "Created: $TargetPath ($Size x $Size)"
}

$logoSrc = (Get-Item "public\logos\logo-icon.png").FullName

Create-SquareFavicon -SourcePath $logoSrc -TargetPath "public\favicon-16x16.png" -Size 16 -PaddingRatio 0.05
Create-SquareFavicon -SourcePath $logoSrc -TargetPath "public\favicon-32x32.png" -Size 32 -PaddingRatio 0.05
Create-SquareFavicon -SourcePath $logoSrc -TargetPath "public\favicon-48x48.png" -Size 48 -PaddingRatio 0.06
Create-SquareFavicon -SourcePath $logoSrc -TargetPath "public\favicon-96x96.png" -Size 96 -PaddingRatio 0.06
Create-SquareFavicon -SourcePath $logoSrc -TargetPath "public\favicon-144x144.png" -Size 144 -PaddingRatio 0.06
Create-SquareFavicon -SourcePath $logoSrc -TargetPath "public\favicon-192x192.png" -Size 192 -PaddingRatio 0.06
Create-SquareFavicon -SourcePath $logoSrc -TargetPath "public\favicon-512x512.png" -Size 512 -PaddingRatio 0.06
Create-SquareFavicon -SourcePath $logoSrc -TargetPath "public\apple-touch-icon.png" -Size 180 -PaddingRatio 0.06

Copy-Item "public\favicon-512x512.png" "src\app\icon.png" -Force
Copy-Item "public\apple-touch-icon.png" "src\app\apple-icon.png" -Force
