import React from "react";
import Image from "next/image";
import Link from "next/link";
import propertyImg from "../public/assets/projects/property.jpg";
import cryptoImg from "../public/assets/projects/crypto.jpg";
import netflixImg from "../public/assets/projects/netflix.jpg";
import twitchImg from "../public/assets/projects/twitch.jpg";

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Projects
        </p>
        <h2 className='py-4'>What I've built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='Property Finder'
            backgroundImage={propertyImg}
            projectURL={"/property"}
          />

          <ProjectItem
            title='Crypto App'
            backgroundImage={cryptoImg}
            projectURL={"/crypto"}
          />

          <ProjectItem
            title='Netflix'
            backgroundImage={netflixImg}
            projectURL={"/netflix"}
          />

          <ProjectItem
            title='Twitch'
            backgroundImage={twitchImg}
            projectURL={"/twitch"}
          />
        </div>
      </div>
    </div>
  );
};

const ProjectItem = ({ title, backgroundImage, projectURL }) => {
  return (
    <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]'>
      <Image
        className='rounded-xl group-hover:opacity-10'
        src={backgroundImage}
        alt={`${title} Background`}
      />
      <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
        <h3 className='text-2xl text-white tracking-wider text-center'>
          {title}
        </h3>
        <p className='pb-4 pt-2 text-white text-center'>React JS</p>
        <Link href={`project/${projectURL}`}>
          <p className='text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>
            More Info
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Projects;
