import Head from "next/head";
import About from "../components/About";
import Contact from "../components/Contact";
import Main from "../components/Main";
import Projects from "../components/Projects";
import Skills from "../components/Skills/Skills";
import { SECTION_NAMES } from "../config/sections";
import sections from "../config/sections.json";

const homeComponents = {
  [SECTION_NAMES.MAIN]: Main,
  [SECTION_NAMES.ABOUT]: About,
  [SECTION_NAMES.SKILLS]: Skills,
  [SECTION_NAMES.PROJECTS]: Projects,
  [SECTION_NAMES.CONTACT]: Contact,
};

export default function Home({ sections }) {
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
          return <Component key={section.name} />;
        })}
    </div>
  );
}

export async function getStaticProps() {
  const homePageSections = sections.filter((section) => section.active);

  return {
    props: {
      sections: homePageSections,
    },
  };
}
