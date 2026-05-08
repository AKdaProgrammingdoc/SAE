import { motion } from "framer-motion";
import { HardHat, MessageCircle, Sparkles } from "lucide-react";
import { useTilt } from "@/hooks/use-tilt";
import ava from "@/assets/helmet-ava-glossy.jpg";
import sharpBlue from "@/assets/helmet-sharp-blue.jpg";
import sbh57 from "@/assets/helmet-sbh57.jpg";
import vintage from "@/assets/helmet-vintage.jpg";
import sharpNeon from "@/assets/helmet-sharp-neon.jpg";

const helmets = [
  { img: ava, name: "SBH-23 Ava Glossy", tag: "With Inner Sunshield", price: "₹1,299" },
  { img: sharpNeon, name: "SBH-25 Sharp — Neon", tag: "Mat / Glossy", price: "₹1,899" },
  { img: sharpBlue, name: "SBH-25 Sharp — Jazz Blue", tag: "Mat / Glossy", price: "₹1,899" },
  { img: sbh57, name: "SBH-57 ISS", tag: "DOT Certified · Chrome-Foil", price: "₹2,199" },
  { img: vintage, name: "SBH-56 Vintage", tag: "Open-Face Classic", price: "₹1,339" },
];

function HelmetCard({ h, i }: { h: typeof helmets[0]; i: number }) {
  const { rotateX, rotateY, scale, glowOpacity, handleMouseMove, handleMouseLeave } = useTilt(8);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
      style={{ perspective: 900 }}
    >
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, scale, transformStyle: "preserve-3d" }}
        className="group relative bg-[var(--gradient-card)] border border-border rounded-2xl overflow-hidden card-hover-glow h-full"
      >
        {/* Shine */}
        <motion.div style={{ opacity: glowOpacity }} className="pointer-events-none absolute inset-0 z-10 rounded-2xl bg-gradient-to-br from-white/10 via-transparent to-transparent" />

        <div className="relative aspect-[4/5] overflow-hidden bg-black">
          <img
            src={h.img}
            alt={h.name}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute top-3 right-3 bg-primary text-primary-foreground text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full shadow-lg z-10">
            {h.price}
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-90" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-5">
          <div className="flex items-center gap-1.5 text-[10px] text-primary font-semibold uppercase tracking-widest mb-1.5">
            <HardHat className="w-3 h-3" />
            {h.tag}
          </div>
          <h3 className="font-display text-lg sm:text-xl font-bold uppercase tracking-wide text-foreground mb-3">
            {h.name}
          </h3>
          <a
            href={`https://wa.me/919842183444?text=${encodeURIComponent(`Hi, I want to order: ${h.name}`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[var(--whatsapp)] text-white text-xs font-bold uppercase tracking-wider px-4 py-2.5 rounded-md shadow-lg hover:shadow-[var(--shadow-glow)] hover:-translate-y-0.5 transition-all"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            Order on WhatsApp
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function Helmets() {
  return (
    <section id="helmets" className="relative py-24 bg-card/30 border-y border-border overflow-hidden">
      <div className="absolute inset-0 metallic-bg opacity-40" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/40 bg-primary/10 text-primary text-xs font-semibold uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Exclusive Collection
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold uppercase tracking-tight">
            We Have <span className="text-gradient-red">Exclusive Helmets</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Premium Steelbird helmets — DOT certified, ISI approved. Order yours today.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {helmets.map((h, i) => <HelmetCard key={h.name} h={h} i={i} />)}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm text-muted-foreground mt-10"
        >
          Call or WhatsApp <a href="https://wa.me/919842183444" className="text-primary font-bold hover:underline">98421 83444</a> to order any helmet.
        </motion.p>
      </div>
    </section>
  );
}
