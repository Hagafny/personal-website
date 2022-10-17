import React from "react";
import ProjectItem from "../components/ProjectItem";
import cmsService from "../services/cms/cmsService";

const Talks = ({ talks = [] }) => {
  return (
    <div className='max-w-[1240px] mx-auto px-2 py-16'>
      <div className='grid md:grid-cols-2 gap-8'>
        {talks.map(({ title, slug, featured, subtitle }) => {
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
    </div>
  );
};

export async function getStaticProps() {
  const talks = await cmsService.getTalks();

  return {
    props: {
      talks,
    },
  };
}

export default Talks;
