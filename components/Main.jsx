import React from "react";
import { useSocials } from "../hooks/useSocials";

const Main = () => {
  const socials = useSocials();

  return (
    <div id='home' className='w-full h-screen text-center'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2li flex justify-center items-center'>
        <div>
          <h1 className='py-4 text-gray-700'>
            Hi, I&#39;m
            <span className='text-main'> Ron Hagafny</span> 👋
          </h1>
          <p className='py-4 text-gray-600 sm:max-w-[70%] m-auto'>
            I’m focused on building responsive front-end web applications while
            learning back-end technologies.
          </p>
          <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
            {socials}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
