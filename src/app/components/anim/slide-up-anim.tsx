import { animated, config, useSpring } from "@react-spring/web";
import { AnimationRefWithChildrenProps } from "../types";

interface SlideProps extends AnimationRefWithChildrenProps {
  direction?: "up" | "down";
}
export default function SlideUp({
  animRef,
  direction = "up",
  children,
  ...props
}: SlideProps) {
  const d = direction === "up" ? 1 : -1;
  const style = useSpring({
    ref: animRef,
    from: { y: 100 * d, opacity: 0 },
    to: { y: 0, opacity: 1 },
    config: { ...config.stiff },
    ...props,
  });

  return <animated.div style={{ ...style }}>{children}</animated.div>;
}
