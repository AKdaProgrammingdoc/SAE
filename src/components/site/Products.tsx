import { motion } from "framer-motion";
import { CheckCircle2, Cog, MessageCircle, ShieldCheck } from "lucide-react";
import { useTilt } from "@/hooks/use-tilt";

const spareParts: { name: string; waMessage: string }[] = [
  { name: "Bike Front Light", waMessage: "Hi, I want to order: Bike Front Light for Hero/Honda bike" },
  { name: "Bike Back Light", waMessage: "Hi, I want to order: Bike Back Light for Hero/Honda bike" },
  { name: "Bike Bearing", waMessage: "Hi, I want to order: Bike Bearing for Hero/Honda bike" },
  { name: "Bike Brakes", waMessage: "Hi, I want to order: Bike Brakes for Hero/Honda bike" },
  { name: "Bike Handle", waMessage: "Hi, I want to order: Bike Handle for Hero/Honda bike" },
  { name: "Brake Oil", waMessage: "Hi, I want to order: Brake Oil for Hero/Honda bike" },
  { name: "Disc Brake", waMessage: "Hi, I want to order: Disc Brake for Hero/Honda bike" },
  { name: "Two Wheeler Accessories", waMessage: "Hi, I want to order: Two Wheeler Accessories for Hero/Honda bike" },
  { name: "Cable Lock", waMessage: "Hi, I want to order: Cable Lock for Hero/Honda bike" },
  { name: "Engine Oil", waMessage: "Hi, I want to order Engine Oil.\nEngine Oil Brand: \nEngine Oil Grade (e.g. 10W30, 20W40): \nBike Model: " },
  { name: "Motorcycle Brake Shoes", waMessage: "Hi, I want to order: Motorcycle Brake Shoes for Hero/Honda bike" },
  { name: "Tyres", waMessage: "Hi, I want to order Tyres.\nTyre Company: \nTyre Size (e.g. 2.75-17, 90/90-17): \nTyre Type (Tube / Tubeless): " },
];

const brands = ["Hero", "Honda"];

function BrandPanel() {
  const { rotateX, rotateY, scale, glowOpacity, handleMouseMove, handleMouseLeave } = useTilt(7);

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      style={{ perspective: 800 }}
    >
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, scale, transformStyle: "preserve-3d" }}
        className="relative bg-[var(--gradient-card)] border border-border rounded-xl p-6 sm:p-8 overflow-hidden h-full"
      >
        <motion.div style={{ opacity: glowOpacity }} className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-br from-white/8 via-transparent to-transparent" />
        <div className="absolute -right-16 -top-16 w-44 h-44 rounded-full bg-primary/20 blur-3xl" />
        <div className="relative">
          <div className="inline-flex items-center gap-2 text-primary text-xs font-bold uppercase tracking-widest mb-5">
            <ShieldCheck className="w-4 h-4" />
            Available for
          </div>
          <div className="grid grid-cols-2 gap-3 mb-8">
            {brands.map((brand) => (
              <motion.div
                key={brand}
                whileHover={{ y: -4, scale: 1.04 }}
                className="rounded-lg border border-primary/35 bg-primary/10 px-4 py-5 text-center"
              >
                <p className="font-display text-3xl sm:text-4xl font-bold uppercase text-foreground">{brand}</p>
                <p className="mt-1 text-xs uppercase tracking-widest text-primary font-semibold">Bike Parts</p>
              </motion.div>
            ))}
          </div>
          <a
            href={`https://wa.me/919842183444?text=${encodeURIComponent("Hi, I want to order spare parts for Hero/Honda bike")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full sm:w-auto items-center justify-center gap-2 bg-primary hover:bg-primary-glow text-primary-foreground px-6 py-3 rounded-md text-sm font-bold uppercase tracking-wider shadow-[var(--shadow-red)] transition-all hover:-translate-y-1"
          >
            <MessageCircle className="w-4 h-4" />
            Order Now
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function Products() {
  return (
    <section id="products" className="relative py-24 metallic-bg overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/40 bg-primary/10 text-primary text-xs font-semibold uppercase tracking-widest mb-4">
            <Cog className="w-3.5 h-3.5 animate-spin [animation-duration:8s]" />
            Our Inventory
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold uppercase tracking-tight">
            Available <span className="text-gradient-red">Spare Parts</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Available for <span className="text-foreground font-semibold">Hero</span> and{" "}
            <span className="text-foreground font-semibold">Honda</span> bikes. WhatsApp us to order now.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-6 lg:gap-10 items-stretch">
          <BrandPanel />

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="bg-card/60 border border-border rounded-xl p-4 sm:p-6"
          >
            <div className="grid sm:grid-cols-2 gap-3">
              {spareParts.map((part, index) => (
                <motion.a
                  key={part}
                  href={`https://wa.me/919842183444?text=${encodeURIComponent(part.waMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: (index % 6) * 0.04 }}
                  whileHover={{ x: 6, scale: 1.02 }}
                  className="group flex items-center justify-between gap-3 rounded-lg border border-border bg-secondary/70 px-4 py-3 hover:border-primary hover:bg-primary/10 transition-all"
                >
                  <span className="flex items-center gap-2 text-sm sm:text-base font-semibold text-foreground">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                    {part.name}
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-primary opacity-80 group-hover:opacity-100 shrink-0">
                    Order
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
