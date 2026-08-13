import { useEffect, useRef } from "react";
import Typed from "typed.js";

export function Typewriter({
  strings,
  className,
}: {
  strings: string[];
  className?: string;
}) {
  const el = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!el.current) return;
    const typed = new Typed(el.current, {
      strings,
      typeSpeed: 55,
      backSpeed: 28,
      backDelay: 1800,
      startDelay: 400,
      loop: true,
      smartBackspace: true,
    });
    return () => typed.destroy();
  }, [strings]);

  return <span ref={el} className={className} aria-live="polite" />;
}
