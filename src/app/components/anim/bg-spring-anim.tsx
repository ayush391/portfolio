import { animated, config, useSpring } from "@react-spring/web";
import { useState } from "react";

export default function BgSpringAnim({ children }: React.PropsWithChildren) {
  const [show, setShow] = useState<boolean>(false);
  const { transform, opacity } = useSpring({
    transform: show ? "scale(1.1)" : "scale(0.3)",
    opacity: show ? 1 : 0,
    config: { ...config.gentle },
  });
  const handleMouseEnter = () => {
    setShow(true);
  };
  const handleMouseLeave = () => {
    setShow(false);
  };

  return (
    <div
      className="overflow-hidden flex hover:text-white justify-center items-center"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <animated.div
        className={`mx-auto absolute w-10 h-10 bg-black -z-1 rounded-full`}
        style={{ opacity, transform, transformOrigin: "center center" }}
      ></animated.div>
      <div className="z-10">{children}</div>
    </div>
  );
}
