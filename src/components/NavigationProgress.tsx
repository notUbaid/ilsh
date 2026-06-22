import { useRouterState } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";

/**
 * Slim top progress bar that shows instantly when navigation starts
 * and disappears once the new page is ready.
 */
export function NavigationProgress() {
  const isLoading = useRouterState({ select: (s) => s.isLoading });
  const [width, setWidth] = useState(0);
  const [visible, setVisible] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (isLoading) {
      // Show bar instantly and animate to ~80%
      setVisible(true);
      setWidth(0);
      // Small delay so the initial 0 renders before animating
      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = requestAnimationFrame(() => setWidth(72));
      });
    } else {
      // Complete the bar then fade out
      setWidth(100);
      timerRef.current = setTimeout(() => {
        setVisible(false);
        setWidth(0);
      }, 380);
    }

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [isLoading]);

  if (!visible) return null;

  return (
    <div
      aria-hidden="true"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        height: 3,
        width: `${width}%`,
        background: "var(--saff)",
        zIndex: 9999,
        transition:
          width === 100
            ? "width 0.25s ease-out, opacity 0.15s ease 0.25s"
            : "width 2.5s cubic-bezier(0.1, 0.05, 0, 1)",
        opacity: width === 100 ? 0 : 1,
        borderRadius: "0 2px 2px 0",
        boxShadow: "0 0 10px rgba(232,151,26,.7)",
        pointerEvents: "none",
      }}
    />
  );
}
