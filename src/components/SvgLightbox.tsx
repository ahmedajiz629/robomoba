import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 80;
  display: flex;
  overflow: auto;
  overscroll-behavior: contain;
  -webkit-overflow-scrolling: touch;
  background: rgba(10, 12, 16, 0.92);
`;

const Stage = styled.div`
  flex: 0 0 auto;
  margin: auto;
  padding: 4.5rem 1.5rem 2rem;
  pointer-events: none;

  svg {
    pointer-events: auto;
    display: block;
    width: max(var(--box), min(100vw, 72rem) - 2*clamp(1.25rem, 4vw, 3rem) - 2.5rem);
    height: auto;
    max-width: none;
    max-height: none;
    background: ${({ theme }) => theme.colors.bg};
    border: 1px solid ${({ theme }) => theme.colors.line};
    border-radius: ${({ theme }) => theme.radii.sm};
  }
`;

function isDiagramSvg(el: Element | null): el is SVGSVGElement {
  if (!el || el.tagName.toLowerCase() !== "svg") return false;
  const svg = el as SVGSVGElement;
  if (svg.getAttribute("aria-hidden") === "true") return false;
  const vb = svg.viewBox?.baseVal;
  if (vb && vb.width >= 120) return true;
  return svg.getAttribute("role") === "img";
}

export default function SvgLightbox() {
  const [clone, setClone] = useState<SVGSVGElement | null>(null);
  const stageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const path = e.composedPath();
      const svg = path.find((n) => n instanceof Element && isDiagramSvg(n));
      if (!svg || !(svg instanceof SVGSVGElement)) return;
      if ((e.target as HTMLElement | null)?.closest("[data-svg-lightbox]")) {
        return;
      }
      e.preventDefault();
      const box = svg.viewBox?.baseVal;
      const node = svg.cloneNode(true) as SVGSVGElement;
      node.style.setProperty("--box", `${box?.width || 680}px`);
      node.removeAttribute("role");
      setClone(node);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  useEffect(() => {
    if (!clone || !stageRef.current) return;
    stageRef.current.replaceChildren(clone);
  }, [clone]);

  useEffect(() => {
    if (!clone) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setClone(null);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [clone]);

  if (!clone) return null;

  return createPortal(
    <Overlay
      data-svg-lightbox
      role="dialog"
      aria-modal="true"
      aria-label="Diagram at full size"
      onClick={(e) => {
        const el = e.target as HTMLElement;
        if (el.closest("svg") || el.closest("button")) return;
        setClone(null);
      }}
    >
      <Stage ref={stageRef} />
    </Overlay>,
    document.body,
  );
}
