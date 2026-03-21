import type { ExportFormat, WhiteboardElement } from "../types";

export async function exportCanvas(
  elements: WhiteboardElement[],
  format: ExportFormat,
  canvasElement: HTMLElement | null,
): Promise<void> {
  if (!canvasElement) return;

  switch (format) {
    case "png":
      await exportAsPNG(canvasElement);
      break;
    case "svg":
      await exportAsSVG(elements);
      break;
    case "pdf":
      await exportAsPDF(canvasElement);
      break;
  }
}

async function exportAsPNG(canvasElement: HTMLElement): Promise<void> {
  try {
    // Dynamic import to handle optional dependency
    const html2canvas = await import("html2canvas")
      .then((m) => m.default)
      .catch(() => null);

    if (!html2canvas) {
      alert(
        "PNG export requires html2canvas library. Please install it: bun add html2canvas",
      );
      return;
    }

    const canvas = await html2canvas(canvasElement, {
      backgroundColor: "#ffffff",
      scale: 2,
    });

    canvas.toBlob((blob) => {
      if (blob) {
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.download = `whiteboard-${Date.now()}.png`;
        link.href = url;
        link.click();
        URL.revokeObjectURL(url);
      }
    });
  } catch (error) {
    console.error("Failed to export as PNG:", error);
    alert("Failed to export as PNG");
  }
}

async function exportAsSVG(elements: WhiteboardElement[]): Promise<void> {
  try {
    if (elements.length === 0) return;

    // Calculate bounds
    let minX = Infinity,
      minY = Infinity,
      maxX = -Infinity,
      maxY = -Infinity;

    elements.forEach((el) => {
      minX = Math.min(minX, el.x);
      minY = Math.min(minY, el.y);
      maxX = Math.max(maxX, el.x + el.width);
      maxY = Math.max(maxY, el.y + el.height);
    });

    const width = maxX - minX + 40; // Add padding
    const height = maxY - minY + 40;
    const offsetX = minX - 20;
    const offsetY = minY - 20;

    // Create SVG
    let svgContent = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="white"/>
`;

    elements.forEach((el) => {
      const x = el.x - offsetX;
      const y = el.y - offsetY;
      const color = el.color || "#e3f2fd";

      if (el.type === "shape") {
        if (el.shapeType === "circle") {
          const cx = x + el.width / 2;
          const cy = y + el.height / 2;
          const r = Math.min(el.width, el.height) / 2;
          svgContent += `  <circle cx="${cx}" cy="${cy}" r="${r}" fill="${color}" stroke="#1976d2" stroke-width="2"/>`;
        } else if (el.shapeType === "diamond") {
          const cx = x + el.width / 2;
          const cy = y + el.height / 2;
          const points = `${cx},${y} ${x + el.width},${cy} ${cx},${y + el.height} ${x},${cy}`;
          svgContent += `  <polygon points="${points}" fill="${color}" stroke="#1976d2" stroke-width="2"/>`;
        } else {
          svgContent += `  <rect x="${x}" y="${y}" width="${el.width}" height="${el.height}" fill="${color}" stroke="#1976d2" stroke-width="2" rx="4"/>`;
        }
        if (el.text) {
          svgContent += `  <text x="${x + el.width / 2}" y="${y + el.height / 2}" text-anchor="middle" dominant-baseline="middle" fill="#333" font-size="14">${el.text}</text>`;
        }
      } else if (el.type === "sticky") {
        svgContent += `  <rect x="${x}" y="${y}" width="${el.width}" height="${el.height}" fill="${color}" stroke="#f9a825" stroke-width="2" rx="4"/>`;
        if (el.text) {
          svgContent += `  <text x="${x + 10}" y="${y + 20}" fill="#333" font-size="14">${el.text}</text>`;
        }
      } else if (el.type === "connector" && el.connectorPoints) {
        const pathData = el.connectorPoints
          .map((p, i) => {
            const px = p.x - offsetX;
            const py = p.y - offsetY;
            return `${i === 0 ? "M" : "L"} ${px} ${py}`;
          })
          .join(" ");
        svgContent += `  <path d="${pathData}" stroke="#666" stroke-width="2" fill="none" marker-end="url(#arrowhead)"/>`;
      }
      svgContent += "\n";
    });

    svgContent += `  <defs>
    <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
      <polygon points="0 0, 10 3, 0 6" fill="#666"/>
    </marker>
  </defs>
</svg>`;

    // Download
    const blob = new Blob([svgContent], { type: "image/svg+xml" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.download = `whiteboard-${Date.now()}.svg`;
    link.href = url;
    link.click();
    URL.revokeObjectURL(url);
  } catch (error) {
    console.error("Failed to export as SVG:", error);
    alert("Failed to export as SVG");
  }
}

async function exportAsPDF(canvasElement: HTMLElement): Promise<void> {
  try {
    // Dynamic imports to handle optional dependencies
    const html2canvas = await import("html2canvas")
      .then((m) => m.default)
      .catch(() => null);

    const { jsPDF } = await import("jspdf").catch(() => ({ jsPDF: null }));

    if (!html2canvas || !jsPDF) {
      alert(
        "PDF export requires html2canvas and jsPDF libraries. Please install them: bun add html2canvas jspdf",
      );
      return;
    }

    const canvas = await html2canvas(canvasElement, {
      backgroundColor: "#ffffff",
      scale: 2,
    });

    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF({
      orientation: canvas.width > canvas.height ? "landscape" : "portrait",
      unit: "px",
      format: [canvas.width, canvas.height],
    });

    pdf.addImage(imgData, "PNG", 0, 0, canvas.width, canvas.height);
    pdf.save(`whiteboard-${Date.now()}.pdf`);
  } catch (error) {
    console.error("Failed to export as PDF:", error);
    alert("Failed to export as PDF");
  }
}

export async function copySelectionAsImage(
  elements: WhiteboardElement[],
  canvasElement: HTMLElement | null,
): Promise<void> {
  if (!canvasElement) return;

  try {
    // Dynamic import to handle optional dependency
    const html2canvas = await import("html2canvas")
      .then((m) => m.default)
      .catch(() => null);

    if (!html2canvas) {
      alert(
        "Copy as image requires html2canvas library. Please install it: bun add html2canvas",
      );
      return;
    }

    const canvas = await html2canvas(canvasElement, {
      backgroundColor: "#ffffff",
      scale: 2,
    });

    canvas.toBlob(async (blob) => {
      if (blob && navigator.clipboard) {
        try {
          await navigator.clipboard.write([
            new ClipboardItem({ "image/png": blob }),
          ]);
          // Could show a toast notification here
        } catch (err) {
          console.error("Failed to copy to clipboard:", err);
          alert("Failed to copy to clipboard");
        }
      }
    });
  } catch (error) {
    console.error("Failed to copy as image:", error);
    alert("Failed to copy as image");
  }
}
