import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import bike from "@/assets/bike.png";
import { GridBackground } from "./GridBackground";
import { useHeroScroll } from "@/hooks/use-scroll-3d";

export function Hero() {
  const { ref, bikeRotateY, bikeScale, bikeZ, textY, textOpacity, bgY } = useHeroScroll();

  // Mouse tilt on bike
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotX = useSpring(useTransform(my, [-0.5, 0.5], [8, -8]), { stiffness: 80, damping: 12 });
  const rotY = useSpring(useTransform(mx, [-0.5, 0.5], [-12, 12]), { stiffness: 80, damping: 12 });

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };
  const reset = () => { mx.set(0); my.set(0); };

  return (
    <section ref={ref} id="home" className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Parallax BG */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 z-0">
        <img src={heroBg} alt="Motorcycle engine" className="w-full h-[120%] object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
      </motion.div>

      <GridBackground />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center w-full py-12">
        {/* Text — fades and slides up on scroll */}
        <motion.div style={{ y: textY, opacity: textOpacity }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/40 bg-primary/10 text-primary text-xs font-semibold uppercase tracking-widest mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Established 2004 · Madurai
          </motion.div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-bold uppercase leading-[1.05] tracking-tight text-foreground">
            {["Madurai's", "Trusted Bike", "Spare Parts Shop"].map((line, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 60, rotateX: -40 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ duration: 0.8, delay: 0.1 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                className={`block ${i === 1 ? "text-gradient-red" : ""}`}
                style={{ transformOrigin: "bottom", display: "block" }}
              >
                {line}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-xl"
          >
            Original Parts. Honest Prices. Serving riders from{" "}
            <span className="text-foreground font-semibold">Simmakkal, Madurai</span> since 2004.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.85 }}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#products"
              className="group relative inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-primary-glow text-primary-foreground px-7 py-4 rounded-md font-bold uppercase tracking-wider text-sm shadow-[var(--shadow-red)] hover:shadow-[var(--shadow-glow)] transition-all hover:-translate-y-0.5 overflow-hidden"
            >
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700" />
              <span className="relative">View Products</span>
              <ArrowRight className="relative w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="https://wa.me/919842183444"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border-2 border-foreground/20 hover:border-primary text-foreground px-7 py-4 rounded-md font-bold uppercase tracking-wider text-sm transition-all hover:bg-primary/5"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp Us
            </a>
          </motion.div>
        </motion.div>

        {/* Bike — rotates in 3D as you scroll down */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          onMouseMove={handleMouse}
          onMouseLeave={reset}
          style={{ perspective: 1200 }}
          className="hidden lg:block relative"
        >
          <motion.div
            className="absolute inset-0 bg-primary/30 blur-[120px] rounded-full"
            animate={{ scale: [1, 1.15, 1], opacity: [0.6, 0.9, 0.6] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.img
            src={bike}
            alt="Motorcycle"
            style={{
              rotateX: rotX,
              rotateY: useTransform(bikeRotateY, (scroll) => scroll + rotY.get()),
              scale: bikeScale,
              z: bikeZ,
              transformStyle: "preserve-3d",
            }}
            className="relative w-full h-auto animate-[float_4s_ease-in-out_infinite] drop-shadow-[0_30px_40px_rgba(204,0,0,0.4)] will-change-transform"
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.6, 0], x: [-40, 40] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeOut" }}
            className="absolute top-1/2 -left-10 w-24 h-0.5 bg-gradient-to-r from-transparent to-primary"
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.4, 0], x: [-30, 30] }}
            transition={{ duration: 1.8, delay: 0.4, repeat: Infinity, ease: "easeOut" }}
            className="absolute top-[60%] -left-6 w-16 h-0.5 bg-gradient-to-r from-transparent to-primary/70"
          />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-2 text-muted-foreground text-xs uppercase tracking-widest"
      >
        <span>Scroll</span>
        <motion.div
          animate={{ scaleY: [0.3, 1, 0.3], opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-px h-10 bg-gradient-to-b from-primary to-transparent origin-top"
        />
      </motion.div>
    </section>
  );
}
