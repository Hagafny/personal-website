import React from "react";
import ProjectsGrid from "../../components/Projects";
import cmsService from "../../services/cms/cmsService";

const Projects = ({ projects }) => {
  return (
    <div className='max-w-[1240px] mx-auto px-2 py-16'>
      <ProjectsGrid projects={projects} />;
    </div>
  );
};

export async function getStaticProps() {
  const projects = await cmsService.getProjects();

  return {
    props: {
      projects,
    },
  };
}

export default Projects;
