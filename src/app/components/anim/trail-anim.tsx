import { a, config, useInView, useTrail } from "@react-spring/web";
import React, { useEffect } from "react";
import { AnimationRefWithChildrenProps } from "../types";

const AnimatedDiv = a.div as any;

export default function Trail({
  animRef,
  children,
  ...props
}: AnimationRefWithChildrenProps) {
  const [ref, inView] = useInView({ once: true });
  const items = React.Children.toArray(children);

  const trail = useTrail(items.length, {
    ref: animRef,
    config: config.gentle,
    from: { opacity: 0, y: 50 },
    to: {
      opacity: animRef ? 1 : inView ? 1 : 0,
      y: animRef ? 0 : inView ? 0 : 50,
    },
    ...props,
  });

  useEffect(() => {
    if (inView && animRef) {
      animRef.start();
    }
  }, [inView, animRef]);

  return (
    <>
      {trail.map(({ y, ...style }, index) => (
        <AnimatedDiv
          key={index}
          ref={index === 0 ? ref : undefined}
          style={style}
        >
          <AnimatedDiv style={{ y }}>{items[index]}</AnimatedDiv>
        </AnimatedDiv>
      ))}
    </>
  );
}
