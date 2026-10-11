export interface TimelineNodeGeometry {
  x: number;
  y: number;
  side: "left" | "right";
  nodeLeft: number;
  nodeTop: number;
  textTop: number;
  textLeft: number | null;
  textRight: number | null;
  textWidth: number;
  textAlign: "left" | "right";
}

export interface TimelineGeometry {
  width: number;
  height: number;
  path: string;
  nodeSize: number;
  logoSize: number;
  nodes: TimelineNodeGeometry[];
}

const K = 0.55;

export function computeTimelineGeometry(params: {
  count: number;
  width: number;
  isMobile: boolean;
}): TimelineGeometry {
  const { count, width, isMobile } = params;
  const nodeSize = isMobile ? 44 : 56;
  const logoSize = isMobile ? 28 : 34;
  const rowHeight = isMobile ? 150 : 200;
  const top = isMobile ? 64 : 110;

  let left: number;
  let right: number;
  let center: number;

  if (isMobile) {
    left = 24;
    right = 70;
    center = 47;
  } else {
    center = width / 2;
    const amplitude = Math.min(170, width * 0.17);
    left = center - amplitude;
    right = center + amplitude;
  }

  const points = Array.from({ length: count }, (_, i) => ({
    x: i % 2 === 0 ? left : right,
    y: top + i * rowHeight,
  }));

  const height = top + (count - 1) * rowHeight + top;

  let path = `M ${center} 0 C ${center} ${top * K} ${points[0].x} ${top - top * K} ${points[0].x} ${top}`;
  for (let i = 1; i < count; i++) {
    const a = points[i - 1];
    const b = points[i];
    path += ` C ${a.x} ${a.y + rowHeight * K} ${b.x} ${b.y - rowHeight * K} ${b.x} ${b.y}`;
  }
  const lastPoint = points[count - 1];
  path += ` C ${lastPoint.x} ${lastPoint.y + top * K} ${center} ${height - top * K} ${center} ${height}`;

  const nodes: TimelineNodeGeometry[] = points.map((point) => {
    const nodeLeft = point.x - nodeSize / 2;
    const nodeTop = point.y - nodeSize / 2;

    if (isMobile) {
      const textLeft = right + nodeSize / 2 + 18;
      return {
        x: point.x,
        y: point.y,
        side: "right",
        nodeLeft,
        nodeTop,
        textTop: point.y - 24,
        textLeft,
        textRight: null,
        textWidth: Math.max(160, width - textLeft),
        textAlign: "left",
      };
    }

    const onLeft = point.x === left;
    const gap = 26;
    const textWidth = Math.max(
      180,
      (onLeft ? left : width - right) - nodeSize / 2 - gap,
    );

    return {
      x: point.x,
      y: point.y,
      side: onLeft ? "left" : "right",
      nodeLeft,
      nodeTop,
      textTop: point.y - 30,
      textLeft: onLeft ? null : right + nodeSize / 2 + gap,
      textRight: onLeft ? width - (left - nodeSize / 2 - gap) : null,
      textWidth,
      textAlign: onLeft ? "right" : "left",
    };
  });

  return { width, height, path, nodeSize, logoSize, nodes };
}
