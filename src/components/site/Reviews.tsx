import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { useTilt } from "@/hooks/use-tilt";
import { useRef } from "react";

const reviews = [
  { text: "Good Approaching And delivery towards rare spares for motorcycle.", name: "Girish Venkatesh" },
  { text: "Best quality spares in original and cheap prices. Owner is very honest and kind.", name: "Oke!! Memezzz" },
  { text: "Great customer care and quality products. Price also comparably cheap.", name: "N Kanagasabapathy" },
  { text: "Excellent price great service.", name: "Arunagirinathan Sridhar" },
];

function ReviewCard({ r, i }: { r: typeof reviews[0]; i: number }) {
  const { rotateX: tiltX, rotateY: tiltY, scale, glowOpacity, handleMouseMove, handleMouseLeave } = useTilt(8);
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "center center"] });
  const scrollRotateX = useSpring(useTransform(scrollYProgress, [0, 1], [25, 0]), { stiffness: 80, damping: 20 });
  const cardY = useSpring(useTransform(scrollYProgress, [0, 1], [50 + i * 15, 0]), { stiffness: 80, damping: 20 });
  const cardOpacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  return (
    <motion.div
      ref={ref}
      style={{ perspective: 800, opacity: cardOpacity, y: cardY }}
      className="snap-center shrink-0 w-[85%] sm:w-[60%] lg:w-auto"
    >
      <motion.article
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX: useTransform([scrollRotateX, tiltX], ([s, h]) => (s as number) + (h as number)),
          rotateY: tiltY,
          scale,
          transformStyle: "preserve-3d",
        }}
        className="bg-card border border-border rounded-xl p-7 relative card-hover-glow h-full cursor-default"
      >
        <motion.div style={{ opacity: glowOpacity }} className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-br from-white/8 via-transparent to-transparent" />
        <Quote className="absolute top-5 right-5 w-8 h-8 text-primary/20" />
        <div className="flex gap-1 mb-4">
          {Array.from({ length: 5 }).map((_, j) => <Star key={j} className="w-4 h-4 fill-[var(--gold)] text-[var(--gold)]" />)}
        </div>
        <p className="text-foreground/90 leading-relaxed mb-6 text-sm">"{r.text}"</p>
        <div className="flex items-center gap-3 pt-4 border-t border-border">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center text-primary-foreground font-bold text-sm">
            {r.name.charAt(0)}
          </div>
          <div>
            <div className="font-semibold text-sm text-foreground">{r.name}</div>
            <div className="text-xs text-muted-foreground">Verified Customer</div>
          </div>
        </div>
      </motion.article>
    </motion.div>
  );
}

export function Reviews() {
  const titleRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: titleRef, offset: ["start end", "start center"] });
  const titleY = useSpring(useTransform(scrollYProgress, [0, 1], [40, 0]), { stiffness: 80, damping: 20 });
  const titleOpacity = useTransform(scrollYProgress, [0, 0.6], [0, 1]);

  return (
    <section className="relative py-24 bg-card/30 border-y border-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div ref={titleRef} style={{ y: titleY, opacity: titleOpacity }} className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[var(--gold)]/40 bg-[var(--gold)]/10 text-[var(--gold)] text-xs font-semibold uppercase tracking-widest mb-4">
            <Star className="w-3.5 h-3.5 fill-current" />Google Reviews
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold uppercase tracking-tight">
            What Our <span className="text-gradient-red">Customers</span> Say
          </h2>
        </motion.div>
        <div className="flex lg:grid lg:grid-cols-4 gap-6 overflow-x-auto lg:overflow-visible snap-x snap-mandatory pb-6 lg:pb-0 -mx-4 px-4 lg:mx-0 lg:px-0">
          {reviews.map((r, i) => <ReviewCard key={r.name} r={r} i={i} />)}
        </div>
      </div>
    </section>
  );
}
