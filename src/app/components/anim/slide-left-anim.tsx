import { animated, config, useInView, useSpring } from "@react-spring/web";
import { useEffect } from "react";
import { AnimationRefWithChildrenProps } from "../types";

interface SlideProps extends AnimationRefWithChildrenProps {
  direction?: "left" | "right";
}
export default function SlideLeft({
  animRef,
  direction = "left",
  children,
  ...props
}: SlideProps) {
  const [ref, inView] = useInView({ once: true });
  const d = direction === "left" ? 1 : -1;
  const style = useSpring({
    ref: animRef,
    from: { x: inView ? 100 * d : 0, opacity: 0 },
    to: { x: 0, opacity: 1 },
    config: { ...config.stiff },
    ...props,
  });
  useEffect(() => {
    animRef?.start();
  }, [inView]);

  return (
    <animated.div ref={ref} style={{ ...style }}>
      {children}
    </animated.div>
  );
}
