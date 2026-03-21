import type { CanvasObject } from "../atoms";

export class CanvasRenderer {
  static renderObject(ctx: CanvasRenderingContext2D, obj: CanvasObject) {
    ctx.save();
    ctx.translate(obj.position.x, obj.position.y);
    ctx.rotate((obj.rotation * Math.PI) / 180);

    if (obj.type === "shape") {
      this.renderShape(ctx, obj);
    } else if (obj.type === "sticky-note") {
      this.renderStickyNote(ctx, obj);
    } else if (obj.type === "connector") {
      this.renderConnector(ctx, obj);
    } else if (obj.type === "freehand") {
      this.renderFreehand(ctx, obj);
    } else if (obj.type === "text") {
      this.renderText(ctx, obj);
    } else if (obj.type === "image") {
      this.renderImage(ctx, obj);
    } else if (obj.type === "frame") {
      this.renderFrame(ctx, obj);
    }

    // Draw selection border
    if (obj.selected && "width" in obj && "height" in obj) {
      ctx.strokeStyle = "#3b82f6";
      ctx.lineWidth = 2;
      ctx.setLineDash([5, 5]);
      ctx.strokeRect(-5, -5, obj.width + 10, obj.height + 10);
      ctx.setLineDash([]);
    }

    ctx.restore();
  }

  static renderShape(ctx: CanvasRenderingContext2D, obj: CanvasObject & { type: "shape" }) {
    const { width, height, fill, stroke, strokeWidth, shapeType, text } = obj;

    ctx.fillStyle = fill;
    ctx.strokeStyle = stroke;
    ctx.lineWidth = strokeWidth;

    ctx.beginPath();

    if (shapeType === "rectangle") {
      ctx.rect(0, 0, width, height);
    } else if (shapeType === "rounded-rectangle") {
      const radius = 10;
      ctx.moveTo(radius, 0);
      ctx.lineTo(width - radius, 0);
      ctx.quadraticCurveTo(width, 0, width, radius);
      ctx.lineTo(width, height - radius);
      ctx.quadraticCurveTo(width, height, width - radius, height);
      ctx.lineTo(radius, height);
      ctx.quadraticCurveTo(0, height, 0, height - radius);
      ctx.lineTo(0, radius);
      ctx.quadraticCurveTo(0, 0, radius, 0);
    } else if (shapeType === "ellipse") {
      ctx.ellipse(width / 2, height / 2, width / 2, height / 2, 0, 0, 2 * Math.PI);
    } else if (shapeType === "diamond") {
      ctx.moveTo(width / 2, 0);
      ctx.lineTo(width, height / 2);
      ctx.lineTo(width / 2, height);
      ctx.lineTo(0, height / 2);
      ctx.closePath();
    } else if (shapeType === "triangle") {
      ctx.moveTo(width / 2, 0);
      ctx.lineTo(width, height);
      ctx.lineTo(0, height);
      ctx.closePath();
    }

    ctx.fill();
    ctx.stroke();

    // Draw text if present
    if (text) {
      ctx.fillStyle = "#000000";
      ctx.font = "14px sans-serif";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(text, width / 2, height / 2);
    }
  }

  static renderStickyNote(
    ctx: CanvasRenderingContext2D,
    obj: CanvasObject & { type: "sticky-note" }
  ) {
    const { width, height, color, text } = obj;

    // Draw shadow
    ctx.shadowColor = "rgba(0, 0, 0, 0.1)";
    ctx.shadowBlur = 10;
    ctx.shadowOffsetX = 2;
    ctx.shadowOffsetY = 2;

    // Draw background
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, width, height);

    // Reset shadow
    ctx.shadowColor = "transparent";
    ctx.shadowBlur = 0;
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;

    // Draw text
    if (text) {
      ctx.fillStyle = "#000000";
      ctx.font = "14px sans-serif";
      ctx.textAlign = "left";
      ctx.textBaseline = "top";

      // Word wrap
      const words = text.split(" ");
      let line = "";
      let y = 10;
      const lineHeight = 20;
      const maxWidth = width - 20;

      for (let i = 0; i < words.length; i++) {
        const testLine = line + words[i] + " ";
        const metrics = ctx.measureText(testLine);
        if (metrics.width > maxWidth && i > 0) {
          ctx.fillText(line, 10, y);
          line = words[i] + " ";
          y += lineHeight;
        } else {
          line = testLine;
        }
      }
      ctx.fillText(line, 10, y);
    }
  }

  static renderConnector(
    ctx: CanvasRenderingContext2D,
    obj: CanvasObject & { type: "connector" }
  ) {
    const { startPoint, endPoint, arrowEnd } = obj;

    ctx.strokeStyle = "#000000";
    ctx.lineWidth = 2;

    // Draw line
    ctx.beginPath();
    ctx.moveTo(startPoint.x, startPoint.y);
    ctx.lineTo(endPoint.x, endPoint.y);
    ctx.stroke();

    // Draw arrow
    if (arrowEnd) {
      const angle = Math.atan2(endPoint.y - startPoint.y, endPoint.x - startPoint.x);
      const arrowSize = 10;

      ctx.beginPath();
      ctx.moveTo(endPoint.x, endPoint.y);
      ctx.lineTo(
        endPoint.x - arrowSize * Math.cos(angle - Math.PI / 6),
        endPoint.y - arrowSize * Math.sin(angle - Math.PI / 6)
      );
      ctx.moveTo(endPoint.x, endPoint.y);
      ctx.lineTo(
        endPoint.x - arrowSize * Math.cos(angle + Math.PI / 6),
        endPoint.y - arrowSize * Math.sin(angle + Math.PI / 6)
      );
      ctx.stroke();
    }
  }

  static renderFreehand(
    ctx: CanvasRenderingContext2D,
    obj: CanvasObject & { type: "freehand" }
  ) {
    const { points, color, strokeWidth } = obj;

    if (points.length < 2) return;

    ctx.strokeStyle = color;
    ctx.lineWidth = strokeWidth;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";

    ctx.beginPath();
    ctx.moveTo(points[0].x, points[0].y);

    for (let i = 1; i < points.length; i++) {
      ctx.lineTo(points[i].x, points[i].y);
    }

    ctx.stroke();
  }

  static renderText(ctx: CanvasRenderingContext2D, obj: CanvasObject & { type: "text" }) {
    const { text, fontSize, color } = obj;

    ctx.fillStyle = color;
    ctx.font = `${fontSize}px sans-serif`;
    ctx.textAlign = "left";
    ctx.textBaseline = "top";
    ctx.fillText(text, 0, 0);
  }

  static renderImage(ctx: CanvasRenderingContext2D, obj: CanvasObject & { type: "image" }) {
    const { width, height } = obj;

    // Draw placeholder
    ctx.fillStyle = "#e5e7eb";
    ctx.fillRect(0, 0, width, height);
    ctx.strokeStyle = "#9ca3af";
    ctx.lineWidth = 2;
    ctx.strokeRect(0, 0, width, height);

    // Draw icon
    ctx.fillStyle = "#6b7280";
    ctx.font = "48px sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("🖼️", width / 2, height / 2);
  }

  static renderFrame(ctx: CanvasRenderingContext2D, obj: CanvasObject & { type: "frame" }) {
    const { width, height, name, color } = obj;

    // Draw border
    ctx.strokeStyle = color;
    ctx.lineWidth = 2;
    ctx.setLineDash([10, 5]);
    ctx.strokeRect(0, 0, width, height);
    ctx.setLineDash([]);

    // Draw label
    ctx.fillStyle = color;
    ctx.fillRect(0, -25, name.length * 8 + 20, 25);

    ctx.fillStyle = "#ffffff";
    ctx.font = "14px sans-serif";
    ctx.textAlign = "left";
    ctx.textBaseline = "middle";
    ctx.fillText(name, 10, -12.5);
  }
}
