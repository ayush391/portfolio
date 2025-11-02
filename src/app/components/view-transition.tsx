"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, ReactNode } from "react";

interface ViewTransition {
  finished: Promise<void>;
  ready: Promise<void>;
  updateCallbackDone: Promise<void>;
  skipTransition: () => void;
}

declare global {
  interface Document {
    startViewTransition?(callback: () => void | Promise<void>): ViewTransition;
  }
}

interface ViewTransitionProps {
  children: ReactNode;
}

export default function ViewTransition({ children }: ViewTransitionProps) {
  const pathname = usePathname();
  const router = useRouter();
  const previousPathname = useRef(pathname);

  useEffect(() => {
    if (pathname !== previousPathname.current) {
      previousPathname.current = pathname;
    }
  }, [pathname]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest("a");

      if (
        !anchor ||
        !anchor.href ||
        anchor.target === "_blank" ||
        anchor.href.startsWith("mailto:") ||
        anchor.href.startsWith("tel:") ||
        anchor.origin !== window.location.origin ||
        e.ctrlKey ||
        e.metaKey ||
        e.shiftKey
      ) {
        return;
      }

      const url = new URL(anchor.href);
      if (url.pathname === pathname) {
        return;
      }

      e.preventDefault();

      if (document.startViewTransition) {
        document.startViewTransition(() => {
          router.push(url.pathname);
        });
      } else {
        router.push(url.pathname);
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [pathname, router]);

  return <>{children}</>;
}
