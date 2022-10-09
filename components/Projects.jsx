import React from "react";
import ProjectItem from "./ProjectItem";

const Projects = ({ projects = [] }) => {
  return (
    <div className='grid md:grid-cols-2 gap-8'>
      {projects.map(({ title, slug, featured, subtitle }) => {
        return (
          <ProjectItem
            key={slug}
            title={title}
            projectUrl={`/${slug}`}
            subtitle={subtitle}
            backgroundImg={featured.src}
            height={featured.height}
            width={featured.width}
          />
        );
      })}
    </div>
  );
};

export default Projects;
