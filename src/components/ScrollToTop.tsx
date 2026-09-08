import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function headerOffset() {
  const header = document.querySelector("header");
  return header instanceof HTMLElement ? header.offsetHeight : 0;
}

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return false;
  const top = el.getBoundingClientRect().top + window.scrollY - headerOffset();
  window.scrollTo({ top: Math.max(0, top), behavior: "auto" });
  return true;
}

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const html = document.documentElement;
    const prev = html.style.scrollBehavior;
    html.style.scrollBehavior = "auto";

    if (!hash) {
      window.scrollTo(0, 0);
      html.style.scrollBehavior = prev;
      return;
    }

    const id = decodeURIComponent(hash.slice(1));
    let cancelled = false;

    const run = () => {
      if (!cancelled) scrollToId(id);
    };

    run();
    const frame = requestAnimationFrame(run);
    const later = window.setTimeout(run, 250);

    return () => {
      cancelled = true;
      cancelAnimationFrame(frame);
      window.clearTimeout(later);
      html.style.scrollBehavior = prev;
    };
  }, [pathname, hash]);

  return null;
}
