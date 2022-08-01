import classNames from "classnames";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { useMediaQuery } from "usehooks-ts";

import styles from "../styles/Sidebar.module.css";
import Route from "../utils/route";
import { transitionFast as transitionDefault } from "../utils/transition";

const routes = [
  new Route("projects", "Projects", "/projects", "subtitle"),
  new Route("overlap", "Overlap", "/overlap?autoscroll=true", "paragraph"),
  new Route("lyu", "Lyu", "/lyu?autoscroll=true", "paragraph"),
  new Route("soul", "Soul", "/soul?autoscroll=true", "paragraph"),
  new Route(
    "sunrise",
    "Sunrise Speaker",
    "https://www.shirleylyu.com/sunrisespeaker",
    "paragraph",
  ),
  new Route("mode", "Mode Bag", "https://www.shirleylyu.com/mode", "paragraph"),
  new Route("tron", "M-Tron", "https://www.shirleylyu.com/m-tron", "paragraph"),
];

const projects = ["overlap", "lyu", "soul", "sunrise", "mode", "tron"];

interface SidebarProps {
  route: string;
  prevRoute: string;
  hoverProject?: (project: string) => void;
  stopHover?: () => void;
}

const defaultProps = {
  hoverProject: (_: string) => {},
  stopHover: () => {},
};

export const Sidebar: React.FC<SidebarProps> = (propsIn) => {
  const props = { ...defaultProps, ...propsIn };
  const [open, setOpen] = useState(true);
  const isXL = useMediaQuery("(min-width: 1280px)");

  return (
    <>
      <motion.div
        suppressHydrationWarning={true}
        initial={{
          width: isXL ? "21rem" : "16rem",
        }}
        animate={{
          width: open ? (isXL ? "21rem" : "16rem") : "0rem",
        }}
        transition={transitionDefault}
        className={classNames(
          "relative h-screen min-h-[30rem] flex-shrink-0 bg-white shadow-lg xl:min-h-[34rem]",
        )}
      >
        <div className="absolute top-0 right-14 flex h-full w-36 flex-col justify-between py-16 xl:right-24">
          <Link href="/">
            <div className="w-full">
              <Image
                src="/logo.svg"
                alt="Shirley Lyu Logo"
                className="cursor-pointer"
                layout="responsive"
                height={75}
                width={167}
              />
            </div>
          </Link>
          <div className="flex flex-col space-y-1">
            {/* <Link href="/about" passHref>
              <a className="subtitle">About</a>
            </Link> */}
            {routes.map((route) => (
              <div key={route.uri} className="flex flex-row">
                <div
                  className="flex flex-row items-center"
                  onMouseEnter={
                    projects.includes(route.uri)
                      ? () => {
                          console.log(route.uri);
                          props.hoverProject(
                            route.uri as
                              | "overlap"
                              | "lyu"
                              | "soul"
                              | "sunrise"
                              | "mode"
                              | "tron",
                          );
                        }
                      : () => {}
                  }
                  onMouseLeave={
                    projects.includes(route.uri)
                      ? () => {
                          console.log(route.uri);
                          props.stopHover();
                        }
                      : () => {}
                  }
                >
                  <motion.div
                    className={`absolute ${route.typeClass}`}
                    transition={transitionDefault}
                    initial={{
                      opacity: props.prevRoute === route.uri ? 1 : 0,
                    }}
                    animate={{
                      opacity: props.route === route.uri ? 1 : 0,
                    }}
                  >
                    -
                  </motion.div>
                  <motion.div
                    className={route.typeClass}
                    transition={transitionDefault}
                    style={{
                      x: props.prevRoute === route.uri ? "0.75rem" : "0rem",
                    }}
                    animate={{
                      x: props.route === route.uri ? "0.75rem" : "0rem",
                    }}
                  >
                    {route.link.startsWith("http") ? (
                      <a href={route.link} target="_blank" rel="noreferrer">
                        {route.name}
                      </a>
                    ) : (
                      <Link
                        href={
                          route.link +
                          (props.route.length > 0
                            ? route.link.includes("?")
                              ? `&prev=${props.route}`
                              : `?prev=${props.route}`
                            : "")
                        }
                      >
                        {route.name}
                      </Link>
                    )}
                  </motion.div>
                </div>
              </div>
            ))}

            <a
              className="subtitle"
              href="https://www.shirleylyu.com"
              target="_blank"
              rel="noreferrer"
            >
              More Works
            </a>
            <a
              className="subtitle pb-4"
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
            >
              Resume
            </a>
          </div>
          <div className="flex flex-row justify-between">
            <a
              href="https://www.instagram.com/lyu.shirley/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-instagram" />
            </a>
            <a href="mailto:shirley.lyu.xiaoya@gmail.com">
              <i className="fa-regular fa-envelope" />
            </a>
            <a
              href="https://www.linkedin.com/in/xiaoya-lyu-11b68419b/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-linkedin-in" />
            </a>
          </div>
        </div>
        <div className="absolute top-20 -right-16 z-20 h-24 w-16 overflow-hidden xl:-right-20 xl:w-20">
          <div
            className="absolute top-0 -left-8 flex h-16 w-16 cursor-pointer items-center rounded-full bg-white shadow-lg xl:-left-10 xl:h-20 xl:w-20"
            onClick={() => {
              setOpen((orig) => !orig);
            }}
          >
            <i
              className={classNames(
                "fa-solid fa-angle-left relative left-9 transition-transform duration-200 ease-in-out xl:left-12",
                {
                  [styles.angle_icon]: true,
                  [styles.rotate]: !open,
                },
              )}
            />
          </div>
        </div>
      </motion.div>
    </>
  );
};
