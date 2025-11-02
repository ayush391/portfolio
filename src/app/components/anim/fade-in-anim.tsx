import { animated, config, useSpring } from "@react-spring/web";
import { AnimationRefWithChildrenProps } from "../types";

const AnimatedDiv = animated.div as any;

export default function FadeIn({
  animRef,
  children,
  ...props
}: AnimationRefWithChildrenProps) {
  const style = useSpring({
    ref: animRef,
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { ...config.gentle },
    ...props,
  });

  return <AnimatedDiv style={style}>{children}</AnimatedDiv>;
}
