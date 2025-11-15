"use client";

import { useEffect, useMemo, useState } from "react";

export default function useMobile() {
  const [width, setWidth] = useState(0);
  const isMobile = useMemo(() => width < 768, [width]);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    handleResize(); // Set initial width
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile;
}
