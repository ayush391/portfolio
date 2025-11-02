import { animated, config, useSpring } from "@react-spring/web";
import { useState } from "react";

const AnimatedDiv = animated.div as any;

export default function BgSpringAnim({ children }: React.PropsWithChildren) {
  const [show, setShow] = useState<boolean>(false);
  const { transform, opacity, color } = useSpring({
    transform: show ? "scale(1.1)" : "scale(0.6)",
    opacity: show ? 1 : 0,
    color: show ? "#000" : "#fff",
    config: { ...config.default },
  });
  const handleMouseEnter = () => {
    setShow(true);
  };
  const handleMouseLeave = () => {
    setShow(false);
  };

  return (
    <div
      className="overflow-hidden flex  justify-center items-center text-black dark:text-white hover:text-white dark:hover:text-black"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <AnimatedDiv
        className={`mx-auto absolute w-10 h-10 bg-black dark:bg-white -z-1 rounded-full`}
        style={{ opacity, transform, transformOrigin: "center center" }}
      ></AnimatedDiv>
      <AnimatedDiv className="z-10 ">{children}</AnimatedDiv>
    </div>
  );
}
