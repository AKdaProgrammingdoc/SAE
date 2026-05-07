import { motion } from "framer-motion";
import { ShieldCheck, Search, Tag, Clock } from "lucide-react";

const features = [
  { icon: ShieldCheck, title: "Original Parts Guaranteed", desc: "100% authentic spares sourced directly from trusted manufacturers." },
  { icon: Search, title: "Rare Spares Available", desc: "Hard-to-find parts for older and uncommon bike models — we stock them." },
  { icon: Tag, title: "Budget Friendly Prices", desc: "Honest pricing with no hidden costs. The best value in Madurai." },
  { icon: Clock, title: "Trusted Since 2004", desc: "Two decades of serving riders across Tamil Nadu with integrity." },
];

export function WhyUs() {
  return (
    <section id="about" className="relative py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/40 bg-primary/10 text-primary text-xs font-semibold uppercase tracking-widest mb-4">
            Why Choose Us
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold uppercase tracking-tight">
            Built on <span className="text-gradient-red">Trust</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8 }}
              className="card-hover-glow group bg-card border border-border rounded-xl p-7 relative overflow-hidden"
            >
              <motion.div
                className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-primary/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity"
              />
              <motion.div
                whileHover={{ rotate: [0, -10, 10, -6, 6, 0], scale: 1.1 }}
                transition={{ duration: 0.6 }}
                className="relative w-14 h-14 rounded-lg bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center mb-5 shadow-[var(--shadow-red)]"
              >
                <f.icon className="w-7 h-7 text-primary-foreground" />
              </motion.div>
              <h3 className="relative font-display text-xl font-bold uppercase tracking-wide mb-2">
                {f.title}
              </h3>
              <p className="relative text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              <div className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-primary to-primary-glow transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
