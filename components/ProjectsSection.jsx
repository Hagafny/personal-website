import React from "react";
import Projects from "./Projects";

const ProjectsSection = ({ projects = [] }) => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-main'>Projects</p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <Projects projects={projects} />
      </div>
    </div>
  );
};

export default ProjectsSection;
