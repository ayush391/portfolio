import { animated, config, useInView, useSpring } from "@react-spring/web";
import { useEffect } from "react";
import { AnimationRefWithChildrenProps } from "../types";

const AnimatedDiv = animated.div as any;

interface SlideProps extends AnimationRefWithChildrenProps {
  direction?: "up" | "down";
}

export default function SlideUp({
  animRef,
  direction = "up",
  children,
  ...props
}: SlideProps) {
  const [ref, inView] = useInView({ once: true });
  const d = direction === "up" ? 1 : -1;

  const style = useSpring({
    ref: animRef,
    from: { y: 50 * d, opacity: 0 },
    to: {
      y: animRef ? 0 : inView ? 0 : 50 * d,
      opacity: animRef ? 1 : inView ? 1 : 0,
    },
    config: { ...config.gentle },
    ...props,
  });

  useEffect(() => {
    if (inView && animRef) {
      animRef.start();
    }
  }, [inView, animRef]);

  return (
    <div ref={ref}>
      <AnimatedDiv style={style}>{children}</AnimatedDiv>
    </div>
  );
}
