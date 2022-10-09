import React from "react";
import Image from "next/image";
import Link from "next/link";
import { RiRadioButtonFill } from "react-icons/ri";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import IconList from "./ui/IconList";

const Project = ({ title, subtitle, text, featured, urls, tech }) => {
  const featuredSrc = `https:${featured.fields.file.url}`;

  return (
    <div className='w-full'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={featuredSrc}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>{title}</h2>
          <h3>{subtitle}</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          {documentToReactComponents(text)}
          {Object.entries(urls).map(([name, url]) => {
            return (
              <a key={name} href={url} target='_blank' rel='noreferrer'>
                <button className='px-8 py-2 mt-4 mr-8'>{name}</button>
              </a>
            );
          })}
        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <IconList Icon={RiRadioButtonFill}>
              {tech.map((techItem) => {
                return <IconList.Item key={techItem}>{techItem}</IconList.Item>;
              })}
            </IconList>
          </div>
        </div>
        <Link href='/#projects'>
          <p className='underline cursor-pointer'>Back</p>
        </Link>
      </div>
    </div>
  );
};

export default Project;

// header
// subtitle
// codeUrl
// demoUrl
// tech stack: [strings]
