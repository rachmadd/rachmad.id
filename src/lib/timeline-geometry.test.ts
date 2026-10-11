import test from "node:test";
import assert from "node:assert/strict";
import { computeTimelineGeometry } from "./timeline-geometry.ts";

const WIDTHS = [320, 390, 768, 1024, 1040, 1440, 1920];

test("node order follows input order (newest-first stays on top)", () => {
  const { nodes } = computeTimelineGeometry({
    count: 6,
    width: 1040,
    isMobile: false,
  });

  for (let i = 1; i < nodes.length; i++) {
    assert.ok(
      nodes[i].y > nodes[i - 1].y,
      `node ${i} should sit below node ${i - 1}`,
    );
  }
});

test("nodes alternate sides on desktop", () => {
  const { nodes } = computeTimelineGeometry({
    count: 6,
    width: 1040,
    isMobile: false,
  });

  nodes.forEach((node, i) => {
    assert.equal(node.side, i % 2 === 0 ? "left" : "right");
  });
});

test("all nodes sit on the right on mobile (single lane)", () => {
  const { nodes } = computeTimelineGeometry({
    count: 6,
    width: 390,
    isMobile: true,
  });

  nodes.forEach((node) => {
    assert.equal(node.side, "right");
  });
});

test("text never overlaps the node at any documented desktop width", () => {
  for (const width of WIDTHS) {
    const { nodes, nodeSize } = computeTimelineGeometry({
      count: 6,
      width,
      isMobile: false,
    });

    for (const node of nodes) {
      const nodeRight = node.x + nodeSize / 2;
      const nodeLeft = node.x - nodeSize / 2;

      assert.ok(node.textWidth > 0, `text width must be positive at ${width}px`);

      if (node.side === "left") {
        const textRightEdge = width - (node.textRight ?? 0);
        assert.ok(
          textRightEdge <= nodeLeft,
          `left-side text must end before the node at ${width}px`,
        );
      } else {
        const textLeftEdge = node.textLeft ?? 0;
        assert.ok(
          textLeftEdge >= nodeRight,
          `right-side text must start after the node at ${width}px`,
        );
      }
    }
  }
});

test("text never overlaps the node lane on mobile", () => {
  for (const width of [320, 360, 390, 430]) {
    const { nodes, nodeSize } = computeTimelineGeometry({
      count: 6,
      width,
      isMobile: true,
    });

    for (const node of nodes) {
      const nodeRight = node.x + nodeSize / 2;
      assert.ok((node.textLeft ?? 0) >= nodeRight);
      assert.ok(node.textWidth > 0);
    }
  }
});

test("path starts and ends on the vertical center line", () => {
  const { path, width } = computeTimelineGeometry({
    count: 6,
    width: 1040,
    isMobile: false,
  });

  const { height } = computeTimelineGeometry({
    count: 6,
    width: 1040,
    isMobile: false,
  });
  const center = width / 2;
  assert.ok(path.startsWith(`M ${center} 0`));
  assert.ok(path.trim().endsWith(`${center} ${height}`));
});

test("height grows with node count", () => {
  const shorter = computeTimelineGeometry({
    count: 3,
    width: 1040,
    isMobile: false,
  });
  const longer = computeTimelineGeometry({
    count: 6,
    width: 1040,
    isMobile: false,
  });

  assert.ok(longer.height > shorter.height);
});
