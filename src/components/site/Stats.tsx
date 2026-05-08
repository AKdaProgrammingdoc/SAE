import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import { Award, Users, Star, Package } from "lucide-react";
import { useTilt } from "@/hooks/use-tilt";

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => `${Math.round(v * 10) / 10}${suffix}`);

  useEffect(() => {
    if (inView) {
      const controls = animate(count, to, { duration: 2.2, ease: [0.22, 1, 0.36, 1] });
      return controls.stop;
    }
  }, [inView, to, count]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

const stats = [
  { icon: Award, value: 20, suffix: "+", label: "Years Experience" },
  { icon: Users, value: 32, suffix: "+", label: "Happy Customers" },
  { icon: Star, value: 3.6, suffix: "★", label: "Google Rating" },
  { icon: Package, value: 1000, suffix: "+", label: "Parts Available" },
];

function StatCard({ s, i }: { s: typeof stats[0]; i: number }) {
  const { rotateX, rotateY, scale, glowOpacity, handleMouseMove, handleMouseLeave } = useTilt(10);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: i * 0.1 }}
      style={{ perspective: 700 }}
    >
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, scale, transformStyle: "preserve-3d" }}
        className="flex flex-col items-center text-center group cursor-default rounded-xl p-4 relative"
      >
        <motion.div style={{ opacity: glowOpacity }} className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-br from-white/5 via-transparent to-transparent" />
        <motion.div
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.7 }}
          className="w-14 h-14 mb-4 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all"
        >
          <s.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground" />
        </motion.div>
        <div className="font-display text-4xl lg:text-5xl font-bold text-foreground">
          <Counter to={s.value} suffix={s.suffix} />
        </div>
        <div className="mt-2 text-xs sm:text-sm uppercase tracking-widest text-muted-foreground">
          {s.label}
        </div>
      </motion.div>
    </motion.div>
  );
}

export function Stats() {
  return (
    <section className="relative py-16 border-y border-border bg-card/40 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5" />
      <motion.div
        animate={{ x: ["-20%", "20%", "-20%"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-y-0 left-1/2 w-[40%] bg-primary/5 blur-3xl"
      />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((s, i) => <StatCard key={s.label} s={s} i={i} />)}
      </div>
    </section>
  );
}
