import { animated, config, useInView, useSpring } from "@react-spring/web";
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
  const [ref, inView] = useInView({ once: true });
  const d = direction === "up" ? 1 : -1;
  const style = useSpring({
    ref: animRef,
    from: { y: inView ? 50 * d : 0, opacity: 0 },
    to: { y: 0, opacity: 1 },
    config: { ...config.gentle },
    ...props,
  });
  // useEffect(() => {
  //   animRef?.start();
  // }, [inView]);
  return (
    <animated.div ref={ref} style={{ ...style }}>
      {children}
    </animated.div>
  );
}
