import { useEffect, useRef, useState } from "react";

/** Animated dotted grid background that reacts to mouse position. */
export function GridBackground() {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 50, y: 30 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const rect = ref.current?.getBoundingClientRect();
      if (!rect) return;
      setPos({
        x: ((e.clientX - rect.left) / rect.width) * 100,
        y: ((e.clientY - rect.top) / rect.height) * 100,
      });
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div ref={ref} className="absolute inset-0 pointer-events-none overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            "radial-gradient(circle, oklch(0.92 0.005 0 / 0.5) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      <div
        className="absolute inset-0 transition-[background] duration-300"
        style={{
          background: `radial-gradient(circle 400px at ${pos.x}% ${pos.y}%, oklch(0.52 0.22 27 / 0.18), transparent 70%)`,
        }}
      />
    </div>
  );
}
