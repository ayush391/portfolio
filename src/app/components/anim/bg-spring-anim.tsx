import { animated, config, useSpring } from "@react-spring/web";
import { PropsWithChildren, useState } from "react";

export default function BgSpringAnim({ children }: PropsWithChildren) {
  const [show, setShow] = useState<boolean>(false);
  const { transform, opacity } = useSpring({
    transform: show ? "scale(1.1)" : "scale(0)",
    opacity: show ? 1 : 0,
    config: { ...config.wobbly },
  });
  const handleMouseEnter = () => {
    setShow(true);
    console.log("mouse enter");
  };
  const handleMouseLeave = () => {
    setShow(false);
    console.log("mouse leave");
  };

  return (
    <div
      className="overflow-hidden flex hover:text-white justify-center items-center"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <animated.div
        className={`mx-auto absolute w-10 h-10 bg-black -z-10 rounded-full`}
        style={{ opacity, transform, transformOrigin: "center center" }}
      ></animated.div>
      {children}
    </div>
  );
}
