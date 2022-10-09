import React from "react";
import ProjectItem from "./ProjectItem";

const Projects = ({ projects = [] }) => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-main'>Projects</p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          {projects.map(({ title, slug, featured }) => {
            return (
              <ProjectItem
                key={slug}
                title={title}
                backgroundImg={featured}
                projectUrl={`/${slug}`}
                tech='React JS'
                height={200}
                width={200}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
