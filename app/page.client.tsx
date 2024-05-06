"use client";

import TopDisplay from "@/components/top-display";
import { useGlobalStateContext } from "@/utils/globalStateContext";
import { projectsData } from "@/utils/project-data";
import { transitionSlow } from "@/utils/transition";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import { useInterval } from "usehooks-ts";

const MotionTopDisplay = motion(TopDisplay);

export default function HomeClient() {
  const { globalState, dispatch } = useGlobalStateContext();
  const { projectRolling } = globalState;
  useInterval(
    () => {
      dispatch({ type: "nextProject" });
    },
    projectRolling ? 3000 : null,
  );

  // Start rolling on page load
  useEffect(() => {
    dispatch({ type: "setProjectRoll", rolling: true });
    dispatch({ type: "setDisplayAnimation", displayAnimation: true });
  }, [dispatch]);

  return (
    <AnimatePresence initial={false}>
      <MotionTopDisplay
        project={projectsData[globalState.currentProject]}
        link
        animation={globalState.displayAnimation}
        absolute={true}
        initial={{ opacity: globalState.displayAnimation ? 0 : 1 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: globalState.displayAnimation ? 0 : 1 }}
        transition={transitionSlow}
        key={globalState.currentProjectIndex}
      />
    </AnimatePresence>
  );
}