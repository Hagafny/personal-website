import React from "react";
import SkillItem from "./SkillItem";
import Html from "../../public/assets/skills/html.png";
import Css from "../../public/assets/skills/css.png";
import Javascript from "../../public/assets/skills/javascript.png";
import ReactImg from "../../public/assets/skills/react.png";
import Tailwind from "../../public/assets/skills/tailwind.png";
import NextJS from "../../public/assets/skills/nextjs.png";

const Skills = () => {
  return (
    <div id='skills' className='w-full lg:h-screen p-2'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
        <p className='text-xl tracking-widest uppercase text-main'>Skills</p>
        <h2 className='py-4'>What I Can Do</h2>
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-8'>
          <SkillItem img={Html}>HTML</SkillItem>
          <SkillItem img={Css}>CSS</SkillItem>
          <SkillItem img={Javascript}>JavaScript</SkillItem>
          <SkillItem img={ReactImg}>React</SkillItem>
          <SkillItem img={Tailwind}>Tailwind</SkillItem>
          <SkillItem img={NextJS}>Next</SkillItem>
        </div>
      </div>
    </div>
  );
};

export default Skills;
