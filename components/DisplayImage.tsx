import classNames from "classnames";
import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

import Animatable, { AnimationData } from "@/components/Animatable";
import { transitionSlow } from "@/utils/transitions";

interface DisplayImageProps {
  source: AnimationData;
  alt: string;
  xSpacing?: boolean;
  botSpacing?: boolean;
  frame?: number;
  overlayTitle?: string;
  overlayText?: string;
  textPosition?: "left" | "right";
  textColor?: string;
}

const defaultProps = {
  botSpacing: true,
  xSpacing: false,
  textColor: "text-black",
  textPosition: "left",
};

const DisplayImage: React.FC<DisplayImageProps> = (propsIn) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const props = { ...defaultProps, ...propsIn };
  return (
    <motion.div
      className={classNames("relative", {
        "mb-spacing-3lg": props.botSpacing,
        "mb-spacing": !props.botSpacing,
        "w-full": !props.xSpacing,
        single: props.xSpacing,
      })}
      style={{ y: "3rem" }}
      animate={{ y: isInView ? "0rem" : "3rem" }}
      transition={transitionSlow}
      ref={ref}
    >
      <Animatable
        source={props.source}
        alt={props.alt}
        frame={props.frame}
      ></Animatable>
      <div
        className={classNames("absolute bottom-2/3", {
          "top-0": props.xSpacing,
          "top-4": !props.xSpacing,
          "left-0": props.xSpacing && props.textPosition === "left",
          "left-spacing-lg": !props.xSpacing && props.textPosition === "left",
          "right-0": props.xSpacing && props.textPosition === "right",
          "right-spacing-lg": !props.xSpacing && props.textPosition === "right",
          "right-2/3 pr-4": props.textPosition === "left",
          "left-2/3 pl-4 text-right": props.textPosition === "right",
        })}
      >
        {props.overlayTitle && (
          <div className={`subtitle ${props.textColor}`}>
            {props.overlayTitle}
          </div>
        )}
        {props.overlayText && (
          <div className={`paragraph ${props.textColor} hidden md:block`}>
            {props.overlayText}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default DisplayImage;
