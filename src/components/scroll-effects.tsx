"use client";

import { useEffect } from "react";

export default function ScrollEffects() {
  useEffect(() => {
    const progress = document.getElementById("prog");
    const navLinks = Array.from(
      document.querySelectorAll<HTMLAnchorElement>("[data-nav]"),
    );
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("main section[id]"),
    );

    let frame = 0;

    const updateProgress = () => {
      frame = 0;

      if (!progress) {
        return;
      }

      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      const value = max > 0 ? Math.min(100, (doc.scrollTop / max) * 100) : 0;
      progress.style.width = `${value}%`;
    };

    const requestProgress = () => {
      if (!frame) {
        frame = window.requestAnimationFrame(updateProgress);
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) {
            continue;
          }

          const href = `#${entry.target.id}`;
          for (const link of navLinks) {
            const isActive = link.getAttribute("href") === href;
            link.classList.toggle("on", isActive);

            if (isActive) {
              link.setAttribute("aria-current", "location");
            } else {
              link.removeAttribute("aria-current");
            }
          }
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );

    for (const section of sections) {
      observer.observe(section);
    }

    window.addEventListener("scroll", requestProgress, { passive: true });
    window.addEventListener("resize", requestProgress);
    updateProgress();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", requestProgress);
      window.removeEventListener("resize", requestProgress);
      window.cancelAnimationFrame(frame);
    };
  }, []);

  return <div id="prog" aria-hidden="true" />;
}
