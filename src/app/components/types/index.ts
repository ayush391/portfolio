import { AnimationProps, SpringRef } from "@react-spring/web";

export interface AnimationRefWithChildrenProps extends AnimationProps {
  animRef?: SpringRef;
  children: React.ReactNode;
}

export interface AnimationRefProps {
  animRef: SpringRef;
}
