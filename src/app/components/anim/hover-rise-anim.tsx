import { animated, config, useSpring } from "@react-spring/web";
import { useState } from "react";

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
    <animated.div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        y,
        boxShadow,
        transformOrigin: "center center",
      }}
    >
      {children}
    </animated.div>
  );
}
