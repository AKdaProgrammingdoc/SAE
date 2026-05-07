import { motion } from "framer-motion";
import { Phone, MessageCircle, MapPin } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="relative py-24 bg-card/30 border-t border-border overflow-hidden">
      <div className="absolute inset-0 metallic-bg opacity-50" />
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/40 bg-primary/10 text-primary text-xs font-semibold uppercase tracking-widest mb-4">
            Get in Touch
          </div>
          <h2 className="font-display text-4xl sm:text-6xl font-bold uppercase tracking-tight">
            Need a Part? <br />
            <span className="text-gradient-red">Talk to Us.</span>
          </h2>
          <p className="mt-6 text-muted-foreground max-w-xl mx-auto">
            Call or WhatsApp us — we'll help you find exactly what your bike needs.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-12 grid sm:grid-cols-2 gap-5 max-w-2xl mx-auto"
        >
          <a
            href="tel:9842183444"
            className="group flex items-center justify-center gap-3 bg-gradient-to-r from-primary to-primary-glow text-primary-foreground px-6 py-5 rounded-xl font-bold uppercase tracking-wider shadow-[var(--shadow-red)] hover:shadow-[var(--shadow-glow)] hover:-translate-y-0.5 transition-all"
          >
            <Phone className="w-5 h-5 group-hover:rotate-12 transition" />
            <div className="text-left">
              <div className="text-[10px] opacity-80">Call Now</div>
              <div className="text-base">98421 83444</div>
            </div>
          </a>
          <a
            href="https://wa.me/919842183444"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center gap-3 bg-[var(--whatsapp)] text-white px-6 py-5 rounded-xl font-bold uppercase tracking-wider shadow-lg hover:-translate-y-0.5 transition-all"
          >
            <MessageCircle className="w-5 h-5 group-hover:rotate-12 transition" />
            <div className="text-left">
              <div className="text-[10px] opacity-80">WhatsApp</div>
              <div className="text-base">98421 83444</div>
            </div>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 inline-flex items-start gap-3 text-left max-w-md mx-auto bg-card/60 border border-border rounded-lg p-5"
        >
          <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
          <p className="text-sm text-muted-foreground">
            <span className="text-foreground font-semibold block mb-1">Sasi Auto Enterprises</span>
            57-C-D, Tamil Sangam Road, Simmakkal, Madurai - 625001
          </p>
        </motion.div>
      </div>
    </section>
  );
}
