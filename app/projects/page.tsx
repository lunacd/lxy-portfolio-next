import { Metadata } from "next";

import ProjectsGallery from "@/components/ProjectsGallery";
import Scroller from "@/components/Scroller";
import { projectsData } from "@/utils/projectData";

export const metadata: Metadata = {
  title: "Projects | Shirley Lyu",
};

export default function Projects() {
  return (
    <Scroller bgColor="bg-[#FDF9F1]">
      <ProjectsGallery
        data={Object.values(projectsData)}
        width={3217}
        height={2659}
      />
    </Scroller>
  );
}
