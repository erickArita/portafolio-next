"use client";

import { useEffect, useRef } from "react";

export default function ParallaxStars() {
  const s1 = useRef<HTMLDivElement>(null);
  const s2 = useRef<HTMLDivElement>(null);
  const s3 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const y = window.scrollY;
        if (s1.current) s1.current.style.transform = `translateY(${-y * 0.15}px)`;
        if (s2.current) s2.current.style.transform = `translateY(${-y * 0.35}px)`;
        if (s3.current) s3.current.style.transform = `translateY(${-y * 0.6}px)`;
        ticking = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div ref={s1} className="stars s1" aria-hidden />
      <div ref={s2} className="stars s2" aria-hidden />
      <div ref={s3} className="stars s3" aria-hidden />
    </>
  );
}
