import { animated, config, useSpring } from "@react-spring/web";
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
  const d = direction === "left" ? 1 : -1;
  const style = useSpring({
    ref: animRef,
    from: { x: 100 * d, opacity: 0 },
    to: { x: 0, opacity: 1 },
    config: { ...config.stiff },
    ...props,
  });

  return <animated.div style={{ ...style }}>{children}</animated.div>;
}
