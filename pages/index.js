import Head from "next/head";
import About from "../components/About";
import Contact from "../components/Contact";
import Main from "../components/Main";
import ProjectsSection from "../components/ProjectsSection";
import Skills from "../components/Skills/Skills";
import { SECTION_NAMES } from "../config/sections";
import sections from "../config/sections.json";
import { createClient } from "contentful";
import cmsService from "../services/cms/cmsService";

const homeComponents = {
  [SECTION_NAMES.MAIN]: Main,
  [SECTION_NAMES.ABOUT]: About,
  [SECTION_NAMES.SKILLS]: Skills,
  [SECTION_NAMES.PROJECTS]: ProjectsSection,
  [SECTION_NAMES.CONTACT]: Contact,
};

export default function Home({ sections, projects }) {
  return (
    <div>
      <Head>
        <title>Ron Hagafny</title>
        <meta
          name='description'
          content='My name is Ron Hagafny and this is my space on the web'
        />
        <link rel='icon' href='/fav.png' />
      </Head>

      {sections
        .filter((section) => homeComponents[section.name])
        .map((section) => {
          const Component = homeComponents[section.name];

          if (section.name === SECTION_NAMES.PROJECTS) {
            return <Component key={section.name} projects={projects} />;
          }
          return <Component key={section.name} />;
        })}
    </div>
  );
}

export async function getStaticProps() {
  const homePageSections = sections.filter((section) => section.active);
  const projects = await cmsService.getProjects();

  return {
    props: {
      sections: homePageSections,
      projects,
    },
  };
}
