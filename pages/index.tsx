import classNames from "classnames";
import { motion } from "framer-motion";
import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import { useInterval } from "usehooks-ts";

import PageRoot from "../components/page-root";
import { Sidebar } from "../components/sidebar";
import TopDisplay from "../components/top-display";
import { projectData, projects } from "../utils/project-data";
import { transitionSlow } from "../utils/transition";

const Home: NextPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(-1);
  const [mainDisplay, setMainDisplay] = useState(true);
  const [interval, setInterval] = useState<number | null>(3000);
  const mainIndex = mainDisplay ? currentIndex : prevIndex;
  const alternateIndex = mainDisplay ? prevIndex : currentIndex;

  const hoverProject = (project: string) => {
    const index = projects.indexOf(project);
    setPrevIndex(currentIndex);
    setCurrentIndex(index);
    setInterval(null);
  };

  const stopHover = () => {
    setPrevIndex(currentIndex);
    setCurrentIndex((orig) => (orig + 1) % projects.length);
    setInterval(4000);
  };

  useInterval(() => {
    setPrevIndex(currentIndex);
    setCurrentIndex((orig) => (orig + 1) % projects.length);
    setMainDisplay((orig) => !orig);
  }, interval);

  return (
    <>
      <Head>
        <title>Portfolio | Shirley Lyu Portfolio</title>
      </Head>
      <PageRoot>
        <Sidebar
          route={projects[currentIndex]}
          prevRoute={prevIndex >= 0 ? projects[prevIndex] : ""}
          hoverProject={hoverProject}
          stopHover={stopHover}
        />
        <div className="relative flex-grow h-screen overflow-hidden">
          <motion.div
            style={{ opacity: 1 }}
            animate={{ opacity: mainDisplay ? 1 : 0 }}
            transition={transitionSlow}
            className={classNames("relative", {
              "z-10": mainDisplay,
              "z-0": !mainDisplay,
            })}
          >
            <TopDisplay project={projectData[mainIndex]} link />
          </motion.div>
          <motion.div
            className={classNames("absolute left-0 top-0 h-full w-full", {
              "z-10": !mainDisplay,
              "z-0": mainDisplay,
            })}
            style={{ opacity: 0 }}
            animate={{ opacity: mainDisplay ? 0 : 1 }}
            transition={transitionSlow}
          >
            <TopDisplay
              project={
                alternateIndex >= 0
                  ? projectData[alternateIndex]
                  : projectData[0]
              }
              link
            />
          </motion.div>
        </div>
      </PageRoot>
    </>
  );
};

export default Home;
