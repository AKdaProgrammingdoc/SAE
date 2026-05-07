import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.div
      style={{ scaleX }}
      initial={{ opacity: 0 }}
      animate={{ opacity: show ? 1 : 0 }}
      className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-primary via-primary-glow to-primary origin-left z-[60] shadow-[0_0_10px_oklch(0.62_0.25_27_/_0.6)]"
    />
  );
}
