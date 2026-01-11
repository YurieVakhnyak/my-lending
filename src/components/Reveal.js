import { useEffect, useRef, useState } from "react";
import { Box } from "@mui/material";

function Reveal({ children, delay = 0 }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.15,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <Box
      ref={ref}
      sx={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : "translateY(24px)",
        transition: `all 0.8s ease ${delay}ms`,
      }}
    >
      {children}
    </Box>
  );
}

export default Reveal;
