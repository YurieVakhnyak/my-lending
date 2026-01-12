import { useEffect, useRef, useState } from "react";
import { Box } from "@mui/material";

function Reveal({
  children,
  delay = 0,
  variant = "fade", // "fade" | "slide"
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  // prefers-reduced-motion
  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  useEffect(() => {
    if (prefersReducedMotion) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [prefersReducedMotion]);

  const styles = {
    fade: {
      opacity: visible ? 1 : 0,
      transition: `opacity 0.6s ease ${delay}ms`,
    },
    slide: {
      opacity: visible ? 1 : 0,
      transform: visible ? "none" : "translateY(8px)",
      transition: `all 0.6s ease ${delay}ms`,
    },
  };

  return (
    <Box ref={ref} sx={styles[variant]}>
      {children}
    </Box>
  );
}

export default Reveal;
