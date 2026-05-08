import { useRef } from "react";
import { useInView, useScroll, useTransform, useSpring } from "framer-motion";

// Cards that fly in with 3D rotation as they scroll into view
export function useScrollReveal3D(direction: "left" | "right" | "up" = "up") {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const xMap = { left: [-60, 0], right: [60, 0], up: [0, 0] };
  const rotateMap = { left: [-15, 0], right: [15, 0], up: [-10, 0] };

  return { ref, inView, xMap: xMap[direction], rotateMap: rotateMap[direction] };
}

// Parallax depth for sections — items move at different speeds
export function useSectionParallax(strength = 60) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useSpring(useTransform(scrollYProgress, [0, 1], [strength, -strength]), {
    stiffness: 60,
    damping: 20,
  });
  const rotateX = useSpring(useTransform(scrollYProgress, [0, 0.5, 1], [8, 0, -8]), {
    stiffness: 60,
    damping: 20,
  });
  return { ref, y, rotateX };
}

// Hero bike scroll — rotates and scales as user scrolls away
export function useHeroScroll() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const bikeRotateY = useSpring(useTransform(scrollYProgress, [0, 1], [0, 25]), { stiffness: 50, damping: 20 });
  const bikeScale = useSpring(useTransform(scrollYProgress, [0, 1], [1, 0.75]), { stiffness: 50, damping: 20 });
  const bikeZ = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  return { ref, bikeRotateY, bikeScale, bikeZ, textY, textOpacity, bgY };
}
