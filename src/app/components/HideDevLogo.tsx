"use client";

import { useEffect } from "react";

export default function HideNextDevLogo() {
  useEffect(() => {
    const interval = setInterval(() => {
      const overlay = document.querySelector('nextjs-portal');
      if (overlay && overlay.shadowRoot) {
        const logo = overlay.shadowRoot.querySelector('div.fixed.left-0.bottom-0');
        if (logo) {
          logo.remove();
          clearInterval(interval);
        }
      }
    }, 300);

    return () => clearInterval(interval);
  }, []);

  return null;
}
