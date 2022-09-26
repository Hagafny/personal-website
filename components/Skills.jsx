import React from "react";
import Image from "next/image";

const Skills = () => {
  return (
    <div className='w-full lg:h-screen p-2'>
      <div className='max-w-[1024px] mx-auto flex flex-col justify-center h-full'>
        <p className='text-xl tracking-widest uppercase text-[#5641e5]'>
          Skills
        </p>
        <h2 className='py-4'>What I can Do</h2>
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
          <SkillGridItem>HTML</SkillGridItem>
          <SkillGridItem>CSS</SkillGridItem>
          <SkillGridItem>Javascript</SkillGridItem>
          <SkillGridItem>React</SkillGridItem>
          <SkillGridItem>Tailwind</SkillGridItem>
          <SkillGridItem>Firebase</SkillGridItem>
          <SkillGridItem>Github</SkillGridItem>
          <SkillGridItem>Shopify</SkillGridItem>
        </div>
      </div>
    </div>
  );
};

const SkillGridItem = ({ children }) => {
  const imageName = children.toLowerCase();

  return (
    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
      <div className='grid grid-cols-2 gap-4 justify-center items-center'>
        <div className='m-auto'>
          <Image
            src={`/../public/assets/skills/${imageName}.png`}
            alt={`${imageName} Logo`}
            width='64px'
            height='64px'
          />
        </div>
        <div className='flex flex-col items-center justify-center'>
          <h3>{children}</h3>
        </div>
      </div>
    </div>
  );
};

export default Skills;
