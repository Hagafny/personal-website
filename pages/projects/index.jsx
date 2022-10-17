import React from "react";
import ProjectsGrid from "../../components/Projects";
import CmsService from "../../services/cms/cmsService";
import { CONTENT_MODELS } from "../../services/cms/mappers";

const Projects = ({ projects }) => {
  return (
    <div className='max-w-[1240px] mx-auto px-2 py-16'>
      <ProjectsGrid projects={projects} />;
    </div>
  );
};

export async function getStaticProps() {
  const projectsCMS = new CmsService(CONTENT_MODELS.BLOG_POST);
  const projects = await projectsCMS.getAll();

  return {
    props: {
      projects,
    },
  };
}

export default Projects;
