import { motion } from "framer-motion";

const items = [
  "Original Parts",
  "Honest Prices",
  "Since 2004",
  "Madurai's Trusted Shop",
  "Rare Spares Available",
  "1000+ Components",
  "Fast Service",
  "Honda · Bajaj · TVS · Hero",
];

export function Marquee() {
  return (
    <div className="relative py-6 border-y border-border bg-card/30 overflow-hidden">
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />
      <div className="flex animate-[marquee_30s_linear_infinite] whitespace-nowrap">
        {[...items, ...items, ...items].map((item, i) => (
          <div key={i} className="flex items-center gap-8 px-8">
            <span className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-wider text-foreground/30 hover:text-primary transition-colors">
              {item}
            </span>
            <motion.span
              animate={{ rotate: 360 }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
              className="text-primary text-2xl"
            >
              ✦
            </motion.span>
          </div>
        ))}
      </div>
    </div>
  );
}
