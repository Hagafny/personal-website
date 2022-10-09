import React from "react";
import ProjectsGrid from "../../components/Projects";
import { createClient } from "contentful";
import { entryToBlogPostData } from "../../styles/utils";

const Projects = ({ projects }) => {
  return <ProjectsGrid projects={projects} />;
};

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const resEntries = await client.getEntries({ content_type: "blogPost" });

  const formattedProjects = resEntries.items.map(entryToBlogPostData);

  return {
    props: {
      projects: formattedProjects,
    },
  };
}

export default Projects;
