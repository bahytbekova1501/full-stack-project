// import { useInView } from " ";
import { useInView } from "@react-spring/core";
import { useAnimation } from "framer-motion";
import React, { useEffect } from "react";
export const useScroll = (thresh = 0.1) => {
  const [element, view] = useInView({ threshold: thresh });
  const controls = useAnimation();
  useEffect(() => {
    if (view) {
      controls.start("show");
    } else {
      controls.start("hidden");
    }
  }, [view]);

  return [element, controls];
};
