import { animated, config, useSpring } from "@react-spring/web";
import { useState } from "react";

const AnimatedDiv = animated.div as any;

export default function HoverRise({ children }: React.PropsWithChildren) {
  const [show, setShow] = useState<boolean>(false);
  const { y, boxShadow } = useSpring({
    y: show ? -20 : 0,
    boxShadow: show ? "-50px 50px 20px #00000020" : "0px 0px 20px #00000020",
    config: { ...config.default },
  });
  const handleMouseEnter = () => {
    setShow(true);
  };
  const handleMouseLeave = () => {
    setShow(false);
  };

  return (
    <AnimatedDiv
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        y,
        boxShadow,
      }}
      className="rounded-xl "
    >
      {children}
    </AnimatedDiv>
  );
}
