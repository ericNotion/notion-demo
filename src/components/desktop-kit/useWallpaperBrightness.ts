import { useEffect, useState } from "react";

type Brightness = "light" | "dark" | "unknown";

/**
 * Analyzes the brightness of the top-left and top-right corners of an image
 * (where menu bar text is rendered).
 * Returns "light" if the area is bright (should use dark text),
 * "dark" if the area is dark (should use light text),
 * or "unknown" while loading.
 */
export function useWallpaperBrightness(imageUrl: string): Brightness {
  const [brightness, setBrightness] = useState<Brightness>("unknown");

  useEffect(() => {
    if (!imageUrl) {
      setBrightness("unknown");
      return;
    }

    const img = new Image();
    img.crossOrigin = "anonymous";

    img.onload = () => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      if (!ctx) {
        setBrightness("unknown");
        return;
      }

      // Menu bar is 28px tall, sample corners where text appears
      // Left side: ~300px wide (apple icon, app name, menu items)
      // Right side: ~200px wide (status icons, date/time)
      const menuBarHeight = 28;
      const leftSampleWidth = 300;
      const rightSampleWidth = 200;

      // Scale factors for sampling
      const scaleX = img.width / window.innerWidth;
      const scaleY = img.height / window.innerHeight;

      // Sample dimensions in image coordinates
      const sampleHeight = Math.ceil(menuBarHeight * scaleY);
      const leftWidth = Math.ceil(leftSampleWidth * scaleX);
      const rightWidth = Math.ceil(rightSampleWidth * scaleX);

      // Calculate luminance for a region
      function getRegionLuminance(
        sx: number,
        sy: number,
        sw: number,
        sh: number,
      ): number {
        canvas.width = sw;
        canvas.height = sh;
        ctx!.drawImage(img, sx, sy, sw, sh, 0, 0, sw, sh);

        const imageData = ctx!.getImageData(0, 0, sw, sh);
        const pixels = imageData.data;

        let totalLuminance = 0;
        const pixelCount = pixels.length / 4;

        for (let i = 0; i < pixels.length; i += 4) {
          const r = pixels[i];
          const g = pixels[i + 1];
          const b = pixels[i + 2];
          // Relative luminance formula (ITU-R BT.709)
          totalLuminance += 0.2126 * r + 0.7152 * g + 0.0722 * b;
        }

        return totalLuminance / pixelCount;
      }

      // Sample top-left corner
      const leftLuminance = getRegionLuminance(0, 0, leftWidth, sampleHeight);

      // Sample top-right corner
      const rightLuminance = getRegionLuminance(
        img.width - rightWidth,
        0,
        rightWidth,
        sampleHeight,
      );

      // Average the two corners
      const avgLuminance = (leftLuminance + rightLuminance) / 2;

      // Threshold at ~140 (slightly above middle for better readability)
      setBrightness(avgLuminance > 140 ? "light" : "dark");
    };

    img.onerror = () => {
      setBrightness("unknown");
    };

    img.src = imageUrl;
  }, [imageUrl]);

  return brightness;
}
