import Image from "next/image";
import Link from "next/link";
import React from "react";

import styles from "../styles/TopDisplay.module.css";
import { appendQueryToInternalLinks } from "../utils/helper-funcs";
import ProjectData, { projectData } from "../utils/project-data";

interface TopDisplayProps {
  project: ProjectData;
  link?: boolean;
}

const TopDisplay: React.FC<TopDisplayProps> = (props) => {
  return (
    <div
      className={`mb-spacing-2lg flex h-screen min-h-[30rem] flex-col xl:min-h-[34rem] w-full ${props.project.bgColor}`}
    >
      <div className="relative min-h-0 w-full flex-shrink flex-grow overflow-hidden">
        <Image
          src={props.project.displayImage}
          alt={props.project.name}
          objectPosition="center center"
          objectFit="cover"
          layout="fill"
        />
        <div className="absolute left-0 top-0 flex h-full w-full justify-center">
          <div
            className={`single mt-12 xl:mt-24 text-3xl ${props.project.titleColor}`}
          >
            {props.project.name}
          </div>
          {props.link &&
            (props.project.link.startsWith("https") ? (
              <a
                className="absolute w-full h-full top-0 left-0 block"
                href={props.project.link}
                target="_blank"
                rel="noreferrer"
              ></a>
            ) : (
              <Link
                href={appendQueryToInternalLinks(
                  props.project.link,
                  `prev=${props.project.uri}`,
                )}
                passHref
              >
                <a className="absolute w-full h-full top-0 left-0 block"></a>
              </Link>
            ))}
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="single mx-spacing-lg flex flex-row space-x-spacing py-8">
          <div className="half flex flex-col space-y-1 relative">
            <div className={`${styles.section} opacity-0`}>
              <span className={styles.heading}>Duration: </span>
              {projectData.reduce(
                (prev, curr) =>
                  prev.length > curr.duration.length ? prev : curr.duration,
                "",
              )}
            </div>
            <div className={`${styles.section} opacity-0`}>
              <span className={styles.heading}>Category: </span>
              {projectData.reduce(
                (prev, curr) =>
                  prev.length > curr.category.length ? prev : curr.category,
                "",
              )}
            </div>
            <div className={`${styles.section} opacity-0`}>
              <span className={styles.heading}>Project Focus: </span>
              {projectData.reduce(
                (prev, curr) =>
                  prev.length > curr.focus.length ? prev : curr.focus,
                "",
              )}
            </div>
            <div className="absolute left-0 top-0 w-full h-full !mt-0 flex flex-col justify-start space-y-1">
              <div className={styles.section}>
                <span className={styles.heading}>Duration: </span>
                {props.project.duration}
              </div>
              <div className={styles.section}>
                <span className={styles.heading}>Category: </span>
                {props.project.category}
              </div>
              <div className={styles.section}>
                <span className={styles.heading}>Project Focus: </span>
                {props.project.focus}
              </div>
            </div>
          </div>
          <div className="half flex flex-col justify-center relative">
            <div className={`${styles.section} opacity-0`}>
              <span className={styles.heading}>Project Brief: </span>
              {projectData.reduce(
                (prev, curr) =>
                  prev.length > curr.brief.length ? prev : curr.brief,
                "",
              )}
            </div>
            <div className="half flex flex-col absolute left-0 top-0 w-full h-full justify-start">
              <div className={styles.section}>
                <span className={styles.heading}>Project Brief: </span>
                {props.project.brief}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopDisplay;
