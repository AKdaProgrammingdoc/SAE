import { useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

export function useTilt(strength = 12) {
  const ref = useRef<HTMLDivElement>(null);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  const springConfig = { stiffness: 120, damping: 18, mass: 0.6 };
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [strength, -strength]), springConfig);
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-strength, strength]), springConfig);
  const scale = useSpring(1, { stiffness: 200, damping: 20 });
  const glowOpacity = useSpring(0, { stiffness: 200, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
    scale.set(1.03);
    glowOpacity.set(1);
  };

  const handleMouseLeave = () => {
    mx.set(0);
    my.set(0);
    scale.set(1);
    glowOpacity.set(0);
  };

  return { ref, rotateX, rotateY, scale, glowOpacity, handleMouseMove, handleMouseLeave };
}
