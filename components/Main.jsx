import React from "react";
import { useSocials } from "../hooks/useSocials";

const Main = () => {
  const socials = useSocials({
    className:
      "rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300",
  });

  return (
    <div id='home' className='w-full h-screen text-center'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2li flex justify-center items-center'>
        <div>
          <h1 className='py-4 text-gray-700 dark:text-white'>
            Hi, I&#39;m
            <span className='text-main'> Ron Hagafny</span> 👋
          </h1>
          <p className='py-4 text-gray-600 dark:text-white sm:max-w-[70%] m-auto'>
            What is something that I want to write here?
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
