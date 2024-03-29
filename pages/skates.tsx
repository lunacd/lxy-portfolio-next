import { NextPage } from "next";
import Head from "next/head";

import DisplayImage from "../components/display-image";
import HorizontalGallery from "../components/horizontal-gallery";
import HorizontalScroll from "../components/horizontal-scroll";
import LargeGallery from "../components/large-gallery";
import ProjectNavigation from "../components/project-navigation";
import Scroller from "../components/scroller";
import SmallGallery from "../components/small-gallery";
import Spacing from "../components/spacing";
import Subtitle from "../components/subtitle";
import TextImage from "../components/text-image";
import Title from "../components/title";
import TopDisplay from "../components/top-display";
import GalleryItem from "../utils/gallery-item";
import { GalleryRowConfig, GalleryRowData } from "../utils/gallery-row-data";
import ImageData from "../utils/image-data";
import { PageProps } from "../utils/page-props";
import { projectData, projects } from "../utils/project-data";
import useScroll from "../utils/use-scroll";

import Belonging1 from "../images/skates/belonging-1-small.webp";
import Belonging2 from "../images/skates/belonging-2-small.webp";
import Belonging3 from "../images/skates/belonging-3-small.webp";
import Belonging4 from "../images/skates/belonging-4-small.webp";
import Colorways from "../images/skates/colorways-full.webp";
import ConceptDevelopment from "../images/skates/concept-dev-2x.webp";
import Details from "../images/skates/details-half.webp";
import Environment1 from "../images/skates/environment-1-full.webp";
import Environment2 from "../images/skates/environment-2-full.webp";
import FlexibleWork from "../images/skates/flexible-work-half.webp";
import Gallery1 from "../images/skates/gallery/gallery-1-half.webp";
import Gallery2 from "../images/skates/gallery/gallery-2-half.webp";
import Gallery3 from "../images/skates/gallery/gallery-3-big.webp";
import Gallery4 from "../images/skates/gallery/gallery-4-half.webp";
import Gallery5 from "../images/skates/gallery/gallery-5-half.webp";
import Gallery6 from "../images/skates/gallery/gallery-6-half.webp";
import Making1 from "../images/skates/making/making-1-small.webp";
import Making2 from "../images/skates/making/making-2-small.webp";
import Making3 from "../images/skates/making/making-3-small.webp";
import Making4 from "../images/skates/making/making-4-small.webp";
import Making5 from "../images/skates/making/making-5-small.webp";
import Making6 from "../images/skates/making/making-6-small.webp";
import Making7 from "../images/skates/making/making-7-small.webp";
import Making8 from "../images/skates/making/making-8-small.webp";
import Making9 from "../images/skates/making/making-9-small.webp";
import Making10 from "../images/skates/making/making-10-small.webp";
import Making11 from "../images/skates/making/making-11-small.webp";
import Making12 from "../images/skates/making/making-12-small.webp";
import Making13 from "../images/skates/making/making-13-small.webp";
import Making14 from "../images/skates/making/making-14-small.webp";
import Making15 from "../images/skates/making/making-15-small.webp";
import Manifesto from "../images/skates/manifesto-half.webp";
import Overview from "../images/skates/overview-full.webp";
import Structure from "../images/skates/structure-full.webp";
import TechDrawing from "../images/skates/tech-drawing-full.webp";
import Usage from "../images/skates/usage-desktop-full.webp";
import UsageM1 from "../images/skates/usage-mobile-1-half.webp";
import UsageM2 from "../images/skates/usage-mobile-2-half.webp";

const Skates: NextPage<PageProps> = (props) => {
  const scrollDiv = useScroll(!props.swipeAnimation);
  return (
    <>
      <Head>
        <title>Skates | Shirley Lyu Portfolio</title>
      </Head>

      <Scroller bgColor="bg-[#F0EBE6]" divRef={scrollDiv}>
        <TopDisplay
          project={projectData[projects.indexOf("skates")]}
          animation={false}
          displayDescriptionOnMobile={true}
        />

        <TextImage
          title="Project Manifesto"
          content={[
            "A versatile chair designed for shared open spaces. “Skates” refers to its special affordances to dance around different needs and environments. It has two elegant “skating blades” and a multipurpose surface. It is designed to be casually shared, easily moved, and artfully arranged into any ad-hoc working space.",
          ]}
          image={Manifesto}
          width={960}
          height={620}
        />

        <Title title="Overview" />
        <DisplayImage
          source={new ImageData(Overview, 1920, 1163)}
          alt="Overview"
          xSpacing
        />

        <TextImage
          title="Design Details"
          content={[
            "- Light color for casual vibe",
            "- Satin white leg for a mobile visual",
            "- Stitching with vibrant contrast",
          ]}
          image={Details}
          width={960}
          height={1062}
        />

        <Title title="Different Usages" />
        <Subtitle subtitle="Normal chair, arm chair, chair with desktop, stool" />
        <div className="hidden md:block">
          <DisplayImage source={new ImageData(Usage, 1920, 622)} alt="Usages" />
        </div>
        <div className="md:hidden">
          <DisplayImage
            source={new ImageData(UsageM1, 6535, 4474)}
            alt="Usage 1"
            botSpacing={false}
          />
          <DisplayImage
            source={new ImageData(UsageM2, 6535, 4474)}
            alt="Usage 2"
          />
        </div>

        <Title title="Usage Environment" />
        <Subtitle subtitle="Open Offices" />
        <DisplayImage
          source={new ImageData(Environment1, 1920, 1079)}
          alt="Open offices"
        />
        <Subtitle subtitle="Lobby" />
        <DisplayImage
          source={new ImageData(Environment2, 1920, 1079)}
          alt="Lobby"
        />

        <Title title="Colorways" />
        <DisplayImage
          source={new ImageData(Colorways, 1920, 1078)}
          alt="Colorways"
        />

        <Title title="Design Process" />
        <TextImage
          image={FlexibleWork}
          width={960}
          height={1022}
          title="Research about Flexible Work"
          content={[
            "- 74% of U.S. companies are using or plan to implement a hybrid work model.",
            "- Major companies were moving their workforce into coworking spaces.",
            "- Multipurpose workspaces can be adapted to meet the different specific needs that arise today.",
          ]}
          titleClass="subtitle"
        />
        <Subtitle subtitle="Create a Sense of Belonging" />
        <HorizontalGallery
          items={[
            new GalleryItem(Belonging1, "Interactive"),
            new GalleryItem(Belonging2, "Comfortable"),
            new GalleryItem(Belonging3, "Welcoming"),
            new GalleryItem(Belonging4, "Enjoyable"),
          ]}
          width={640}
          height={529}
          titleClass="paragraph"
        />

        <Title title="Concept Development" />
        <HorizontalScroll
          source={new ImageData(ConceptDevelopment, 3840, 836)}
          alt="Concept development"
          xSzie="2x"
          prompt="Scroll horizontally to see the full process!"
        />

        <Title title="Final Tech Drawing" />
        <DisplayImage
          source={new ImageData(TechDrawing, 1920, 750)}
          alt="Tech drawing"
          xSpacing
        />

        <Title title="Final Structure" />
        <DisplayImage
          source={new ImageData(Structure, 1920, 1490)}
          alt="Structure"
          xSpacing
        />

        <Title title="Model Making" />
        <SmallGallery
          items={[
            new GalleryItem(Making1, "Water Jet Cutting"),
            new GalleryItem(Making2, "Steel Tube Bending and Welding"),
            new GalleryItem(Making3, "Steel Sanding"),
            new GalleryItem(Making4, "Holes and Chamfer Making"),
            new GalleryItem(Making5, "Preparing J-Panel"),
            new GalleryItem(Making6, "J-Panel Cutting"),
            new GalleryItem(Making7, "Plywood Gluing"),
            new GalleryItem(Making8, "Screwing on Steel Support Sheets"),
            new GalleryItem(Making9, "Lining up Screw Holes"),
            new GalleryItem(Making10, "Installing T-nuts"),
            new GalleryItem(Making11, "Selecting Foams"),
            new GalleryItem(Making12, "Stitching Upholstery"),
            new GalleryItem(Making13, "Powder Coating"),
            new GalleryItem(Making14, "Installing Glides under Tubes"),
            new GalleryItem(Making15, "Assembly"),
          ]}
          width={640}
          height={470}
        />

        <Title title="Gallery" />
        <LargeGallery
          description="Skates Gallery"
          rows={[
            new GalleryRowData(
              [
                new ImageData(Gallery1, 960, 1153),
                new ImageData(Gallery2, 960, 1438),
              ],
              GalleryRowConfig.EqualWidthEnd,
            ),
            new GalleryRowData([
              new ImageData(Gallery3, 1280, 825),
              new ImageData(Gallery4, 960, 1377),
            ]),
            new GalleryRowData(
              [
                new ImageData(Gallery5, 960, 1438),
                new ImageData(Gallery6, 960, 1153),
              ],
              GalleryRowConfig.EqualWidthStart,
            ),
          ]}
          botSpacing={false}
        />

        <div className="text-center text-xs">
          * This project is sponsored by Bernhardt Design.
        </div>
        <Spacing size="medium" />

        <ProjectNavigation prev="/soul" next="/overlap" />
      </Scroller>
    </>
  );
};

export default Skates;
