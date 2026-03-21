import type { WhiteboardElement, ExportFormat } from '../types';

export async function exportCanvas(
  elements: WhiteboardElement[],
  format: ExportFormat,
  canvasElement: HTMLElement | null
): Promise<void> {
  if (!canvasElement) return;

  switch (format) {
    case 'png':
      await exportAsPNG(canvasElement);
      break;
    case 'svg':
      await exportAsSVG(elements);
      break;
    case 'pdf':
      await exportAsPDF(canvasElement);
      break;
  }
}

async function exportAsPNG(canvasElement: HTMLElement): Promise<void> {
  try {
    // Dynamic import to handle optional dependency
    const html2canvas = await import('html2canvas').then(m => m.default).catch(() => null);
    
    if (!html2canvas) {
      alert('PNG export requires html2canvas library. Please install it: bun add html2canvas');
      return;
    }

    const canvas = await html2canvas(canvasElement, {
      backgroundColor: '#ffffff',
      scale: 2,
    });

    canvas.toBlob((blob) => {
      if (blob) {
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.download = `whiteboard-${Date.now()}.png`;
        link.href = url;
        link.click();
        URL.revokeObjectURL(url);
      }
    });
  } catch (error) {
    console.error('PNG export failed:', error);
    alert('PNG export is not available. Install html2canvas: bun add html2canvas');
  }
}

async function exportAsSVG(elements: WhiteboardElement[]): Promise<void> {
  if (elements.length === 0) {
    alert('Nothing to export');
    return;
  }

  // Calculate bounds
  let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
  elements.forEach(el => {
    minX = Math.min(minX, el.x);
    minY = Math.min(minY, el.y);
    maxX = Math.max(maxX, el.x + el.width);
    maxY = Math.max(maxY, el.y + el.height);
  });

  const width = maxX - minX + 100;
  const height = maxY - minY + 100;
  const padding = 50;

  let svgContent = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="${minX - padding} ${minY - padding} ${width} ${height}">`;
  svgContent += '<rect width="100%" height="100%" fill="white"/>';

  // Add arrow marker definition
  svgContent += `
    <defs>
      <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
        <polygon points="0 0, 10 3, 0 6" fill="#666" />
      </marker>
    </defs>
  `;

  elements.forEach(el => {
    if (el.type === 'shape') {
      svgContent += renderShapeAsSVG(el);
    } else if (el.type === 'sticky') {
      svgContent += renderStickyAsSVG(el);
    } else if (el.type === 'text') {
      svgContent += renderTextAsSVG(el);
    } else if (el.type === 'connector') {
      svgContent += renderConnectorAsSVG(el);
    }
  });

  svgContent += '</svg>';

  const blob = new Blob([svgContent], { type: 'image/svg+xml' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.download = `whiteboard-${Date.now()}.svg`;
  link.href = url;
  link.click();
  URL.revokeObjectURL(url);
}

function renderShapeAsSVG(el: WhiteboardElement): string {
  const color = el.color || '#e3f2fd';
  let shape = '';

  if (el.shapeType === 'rectangle') {
    shape = `<rect x="${el.x}" y="${el.y}" width="${el.width}" height="${el.height}" fill="${color}" stroke="#1976d2" stroke-width="2" rx="4"/>`;
  } else if (el.shapeType === 'circle') {
    const cx = el.x + el.width / 2;
    const cy = el.y + el.height / 2;
    const r = Math.min(el.width, el.height) / 2;
    shape = `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${color}" stroke="#1976d2" stroke-width="2"/>`;
  } else if (el.shapeType === 'diamond') {
    const cx = el.x + el.width / 2;
    const cy = el.y + el.height / 2;
    const points = `${cx},${el.y} ${el.x + el.width},${cy} ${cx},${el.y + el.height} ${el.x},${cy}`;
    shape = `<polygon points="${points}" fill="${color}" stroke="#1976d2" stroke-width="2"/>`;
  }

  if (el.content) {
    const textX = el.x + el.width / 2;
    const textY = el.y + el.height / 2;
    const escapedContent = el.content.replace(/[<>&'"]/g, char => {
      const entities: Record<string, string> = { '<': '&lt;', '>': '&gt;', '&': '&amp;', "'": '&apos;', '"': '&quot;' };
      return entities[char] || char;
    });
    shape += `<text x="${textX}" y="${textY}" text-anchor="middle" dominant-baseline="middle" font-size="14" fill="#000">${escapedContent}</text>`;
  }

  return shape;
}

function renderStickyAsSVG(el: WhiteboardElement): string {
  const color = el.color || '#fff9c4';
  let svg = `<rect x="${el.x}" y="${el.y}" width="${el.width}" height="${el.height}" fill="${color}" stroke="#f9a825" stroke-width="2" rx="4"/>`;
  
  if (el.content) {
    const textX = el.x + 10;
    const textY = el.y + 20;
    const escapedContent = el.content.replace(/[<>&'"]/g, char => {
      const entities: Record<string, string> = { '<': '&lt;', '>': '&gt;', '&': '&amp;', "'": '&apos;', '"': '&quot;' };
      return entities[char] || char;
    });
    svg += `<text x="${textX}" y="${textY}" font-size="14" fill="#000"><tspan x="${textX}" dy="0">${escapedContent}</tspan></text>`;
  }
  
  return svg;
}

function renderTextAsSVG(el: WhiteboardElement): string {
  const escapedContent = (el.content || '').replace(/[<>&'"]/g, char => {
    const entities: Record<string, string> = { '<': '&lt;', '>': '&gt;', '&': '&amp;', "'": '&apos;', '"': '&quot;' };
    return entities[char] || char;
  });
  return `<text x="${el.x}" y="${el.y + 20}" font-size="16" font-weight="600" fill="#000">${escapedContent}</text>`;
}

function renderConnectorAsSVG(el: WhiteboardElement): string {
  if (!el.connectorPoints || el.connectorPoints.length < 2) return '';
  
  const pathData = el.connectorPoints.map((p, i) => 
    `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`
  ).join(' ');
  
  return `<path d="${pathData}" stroke="#666" stroke-width="2" fill="none" marker-end="url(#arrowhead)"/>`;
}

async function exportAsPDF(canvasElement: HTMLElement): Promise<void> {
  try {
    // Dynamic import to handle optional dependencies
    const html2canvas = await import('html2canvas').then(m => m.default).catch(() => null);
    const jsPDF = await import('jspdf').then(m => m.jsPDF).catch(() => null);
    
    if (!html2canvas || !jsPDF) {
      alert('PDF export requires html2canvas and jspdf libraries. Please install them: bun add html2canvas jspdf');
      return;
    }
    
    const canvas = await html2canvas(canvasElement, {
      backgroundColor: '#ffffff',
      scale: 2,
    });

    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF({
      orientation: canvas.width > canvas.height ? 'landscape' : 'portrait',
      unit: 'px',
      format: [canvas.width, canvas.height],
    });

    pdf.addImage(imgData, 'PNG', 0, 0, canvas.width, canvas.height);
    pdf.save(`whiteboard-${Date.now()}.pdf`);
  } catch (error) {
    console.error('PDF export failed:', error);
    alert('PDF export is not available. Install dependencies: bun add html2canvas jspdf');
  }
}

export async function copySelectionAsImage(
  elements: WhiteboardElement[],
  canvasElement: HTMLElement | null
): Promise<void> {
  if (!canvasElement) return;

  try {
    const html2canvas = await import('html2canvas').then(m => m.default).catch(() => null);
    
    if (!html2canvas) {
      alert('Copy as image requires html2canvas library. Please install it: bun add html2canvas');
      return;
    }

    const canvas = await html2canvas(canvasElement, {
      backgroundColor: '#ffffff',
      scale: 2,
    });

    canvas.toBlob(async (blob) => {
      if (blob && navigator.clipboard && 'write' in navigator.clipboard) {
        await navigator.clipboard.write([
          new ClipboardItem({ 'image/png': blob }),
        ]);
        alert('Copied to clipboard!');
      }
    });
  } catch (error) {
    console.error('Copy as image failed:', error);
    alert('Copy as image is not available. Install html2canvas: bun add html2canvas');
  }
}
