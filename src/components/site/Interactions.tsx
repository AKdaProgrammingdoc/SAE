import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/** Custom magnetic cursor — desktop only. */
export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const target = useRef({ x: 0, y: 0 });
  const ring = useRef({ x: 0, y: 0 });
  const hovering = useRef(false);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const onMove = (e: MouseEvent) => {
      target.current.x = e.clientX;
      target.current.y = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX - 4}px, ${e.clientY - 4}px, 0)`;
      }
      const el = e.target as HTMLElement;
      const isInteractive = !!el.closest("a, button, [role='button']");
      if (isInteractive !== hovering.current) {
        hovering.current = isInteractive;
        if (ringRef.current) ringRef.current.dataset.hover = String(isInteractive);
      }
    };

    let raf = 0;
    const tick = () => {
      ring.current.x += (target.current.x - ring.current.x) * 0.18;
      ring.current.y += (target.current.y - ring.current.y) * 0.18;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ring.current.x - 18}px, ${ring.current.y - 18}px, 0)`;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    window.addEventListener("mousemove", onMove);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="hidden lg:block fixed top-0 left-0 w-2 h-2 rounded-full bg-primary z-[100] pointer-events-none mix-blend-screen"
      />
      <div
        ref={ringRef}
        data-hover="false"
        className="hidden lg:block fixed top-0 left-0 w-9 h-9 rounded-full border-2 border-primary/60 z-[99] pointer-events-none transition-[width,height,border-color,background] duration-300 data-[hover=true]:w-14 data-[hover=true]:h-14 data-[hover=true]:bg-primary/15 data-[hover=true]:border-primary"
      />
    </>
  );
}

interface Toast { id: number; text: string }

const MESSAGES = [
  "Ramesh from Anna Nagar just ordered Brake Oil",
  "5 customers viewing Helmets right now",
  "Suresh ordered Honda Spare Parts • 2 min ago",
  "Karthik ordered a Disc Brake • just now",
  "New ⭐⭐⭐⭐⭐ review from Madurai",
];

/** Social-proof toasts that pop in occasionally. */
export function ProofToasts() {
  const [toasts, setToasts] = useState<Toast[]>([]);

  useEffect(() => {
    let i = 0;
    let id = 1;
    const push = () => {
      const t: Toast = { id: id++, text: MESSAGES[i % MESSAGES.length] };
      i++;
      setToasts((cur) => [...cur, t]);
      setTimeout(() => setToasts((cur) => cur.filter((x) => x.id !== t.id)), 4500);
    };
    const initial = setTimeout(push, 5000);
    const interval = setInterval(push, 10000);
    return () => { clearTimeout(initial); clearInterval(interval); };
  }, []);

  return (
    <div className="fixed bottom-24 left-4 sm:left-6 z-40 flex flex-col gap-2 pointer-events-none max-w-[280px]">
      <AnimatePresence>
        {toasts.map((t) => (
          <motion.div
            key={t.id}
            initial={{ opacity: 0, x: -40, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -20, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 260, damping: 22 }}
            className="bg-card/90 backdrop-blur-md border border-border rounded-lg p-3 shadow-xl flex items-start gap-2"
          >
            <div className="w-2 h-2 rounded-full bg-[var(--whatsapp)] mt-1.5 animate-pulse shrink-0" />
            <p className="text-xs text-foreground leading-snug">{t.text}</p>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
