import { animated, config, useSpring } from "@react-spring/web";
import { AnimationRefWithChildrenProps } from "../types";

export default function SlideLeft({
  animRef,
  children,
  ...props
}: AnimationRefWithChildrenProps) {
  const style = useSpring({
    ref: animRef,
    from: { x: 100, opacity: 0 },
    to: { x: 0, opacity: 1 },
    config: { ...config.stiff },
    ...props,
  });

  return <animated.div style={{ ...style }}>{children}</animated.div>;
}
