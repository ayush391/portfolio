import { animated, config, useSpring } from "@react-spring/web";
import { PropsWithChildren, useState } from "react";

export default function SlideLeft({ children }: PropsWithChildren) {
  const [show, setShow] = useState<boolean>(false);
  const props = useSpring({
    from: { x: 100, opacity: 0 },
    to: { x: 0, opacity: 1 },
    config: { ...config.stiff },
  });

  return <animated.div style={{ ...props }}>{children}</animated.div>;
}
