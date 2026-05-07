import { motion } from "framer-motion";
import { MapPin, Clock, Navigation } from "lucide-react";

const ADDRESS = "57-C-D, Tamil Sangam Road, Simmakkal, Madurai - 625001";
const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("Sasi Auto Enterprises, " + ADDRESS)}`;
const EMBED = `https://www.google.com/maps?q=${encodeURIComponent("Sasi Auto Enterprises, " + ADDRESS)}&output=embed`;

export function Location() {
  return (
    <section className="relative py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/40 bg-primary/10 text-primary text-xs font-semibold uppercase tracking-widest mb-4">
            <MapPin className="w-3.5 h-3.5" />
            Visit Us
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold uppercase tracking-tight">
            Find <span className="text-gradient-red">Us</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 bg-card border border-border rounded-xl p-8 flex flex-col justify-between"
          >
            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-2 text-primary font-semibold uppercase text-xs tracking-widest mb-2">
                  <MapPin className="w-4 h-4" /> Address
                </div>
                <p className="text-foreground leading-relaxed">{ADDRESS}</p>
              </div>
              <div>
                <div className="flex items-center gap-2 text-primary font-semibold uppercase text-xs tracking-widest mb-2">
                  <Clock className="w-4 h-4" /> Open Hours
                </div>
                <p className="text-foreground">Monday – Saturday</p>
                <p className="text-muted-foreground text-sm">9:00 AM – 7:00 PM</p>
              </div>
            </div>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-primary-glow text-primary-foreground px-6 py-3.5 rounded-md font-bold uppercase tracking-wider text-sm shadow-[var(--shadow-red)] hover:shadow-[var(--shadow-glow)] transition"
            >
              <Navigation className="w-4 h-4" />
              Get Directions
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 rounded-xl overflow-hidden border border-border min-h-[320px] lg:min-h-[420px]"
          >
            <iframe
              title="Sasi Auto Enterprises Location"
              src={EMBED}
              width="100%"
              height="100%"
              loading="lazy"
              style={{ border: 0, minHeight: 320, filter: "invert(0.9) hue-rotate(180deg)" }}
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
