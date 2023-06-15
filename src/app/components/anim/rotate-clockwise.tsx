import { animated, config, useSpring } from "@react-spring/web";
import { useState } from "react";
import { AnimationRefWithChildrenProps } from "../types";

export default function RotateClockwise({
  animRef,
  children,
  ...props
}: AnimationRefWithChildrenProps) {
  const [animate, setAnimate] = useState<boolean>(false);
  const style = useSpring({
    ref: animRef,
    from: { rotate: "0deg" },
    to: { rotate: animate ? "360deg" : "0deg" },
    config: { ...config.wobbly },
    ...props,
  });

  return (
    <animated.div onClick={() => setAnimate(!animate)} style={{ ...style }}>
      {children}
    </animated.div>
  );
}
