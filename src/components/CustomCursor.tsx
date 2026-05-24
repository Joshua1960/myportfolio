import React, { useEffect, useRef } from "react";

export const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only enable on non-touch devices
    if (window.matchMedia && window.matchMedia("(pointer: coarse)").matches)
      return;

    const cursor = cursorRef.current;
    const follower = followerRef.current;

    if (!cursor || !follower) return;

    let mouseX = 0;
    let mouseY = 0;
    let posX = 0;
    let posY = 0;
    let rafId: number | null = null;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      // position using left/top so Tailwind -translate classes can center the element
      cursor.style.left = `${mouseX}px`;
      cursor.style.top = `${mouseY}px`;
    };

    const lerp = (a: number, b: number, n: number) => (1 - n) * a + n * b;

    const render = () => {
      posX = lerp(posX, mouseX, 0.12);
      posY = lerp(posY, mouseY, 0.12);
      follower.style.left = `${posX}px`;
      follower.style.top = `${posY}px`;
      rafId = requestAnimationFrame(render);
    };

    const onPointerEnter = () => {
      cursor.classList.add("scale-150");
      follower.classList.add("bg-primary/20", "scale-125");
    };

    const onPointerLeave = () => {
      cursor.classList.remove("scale-150");
      follower.classList.remove("bg-primary/20", "scale-125");
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });

    const clickables = document.querySelectorAll(
      'a, button, input, select, textarea, [role="button"]',
    );
    clickables.forEach((el) => {
      el.addEventListener("pointerenter", onPointerEnter);
      el.addEventListener("pointerleave", onPointerLeave);
    });

    rafId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      clickables.forEach((el) => {
        el.removeEventListener("pointerenter", onPointerEnter);
        el.removeEventListener("pointerleave", onPointerLeave);
      });
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-3 h-3 bg-primary rounded-full pointer-events-none z-100 transform -translate-x-1/2 -translate-y-1/2 mix-blend-difference hidden md:block"
      />
      <div
        ref={followerRef}
        className="fixed top-0 left-0 w-10 h-10 border border-primary/50 rounded-full pointer-events-none z-99 transform -translate-x-1/2 -translate-y-1/2 hidden md:block transition-colors duration-300"
      />
    </>
  );
};
