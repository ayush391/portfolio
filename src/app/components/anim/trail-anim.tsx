import { a, config, useTrail } from "@react-spring/web";
import React from "react";

export default function Trail({ children }: React.PropsWithChildren) {
  const items = React.Children.toArray(children);
  const trail = useTrail(items.length, {
    config: config.gentle,
    // opacity: open ? 1 : 0,
    // x: open ? 0 : 20,
    // height: open ? 110 : 0,
    from: { opacity: 0, y: 50 },
    to: { opacity: 1, y: 0 },
  });
  return (
    <>
      {trail.map(({ y, ...style }, index) => (
        <a.div key={index} className="" style={style}>
          <a.div style={{ y }}>{items[index]}</a.div>
        </a.div>
      ))}
    </>
  );
}
