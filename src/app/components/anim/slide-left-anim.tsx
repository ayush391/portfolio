import { animated, config, useInView, useSpring } from "@react-spring/web";
import { useEffect } from "react";
import { AnimationRefWithChildrenProps } from "../types";

const AnimatedDiv = animated.div as any;

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
    from: { x: 100 * d, opacity: 0 },
    to: {
      x: animRef ? 0 : inView ? 0 : 100 * d,
      opacity: animRef ? 1 : inView ? 1 : 0,
    },
    config: { ...config.stiff },
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
