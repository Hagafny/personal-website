import React from "react";
import { useSocialsData } from "../hooks/useSocials";
import { SocialItem } from "../config/socials.js";

const Main = () => {
  const socialsData = useSocialsData();

  // {
  //   className:
  //     "rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300",
  // }

  const socials = socialsData.map((socialMediaData, i) => {
    return (
      <div
        key={socialMediaData.url}
        className={`animate-[slideIn_0.5s_linear_both] fill`}
        style={{
          animationDelay: `${2.9 + (i + 1) * 0.2}s`,
        }}
      >
        <SocialItem
          {...socialMediaData}
          className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'
        />
      </div>
    );
  });

  return (
    <div id='home' className='w-full h-screen text-center'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2li flex justify-center items-center'>
        <div className='animate-headings'>
          <h1 className='py-4 text-gray-700 dark:text-white animate-fadeRight'>
            Hi, I&#39;m <span className='text-main'>Ron Hagafny</span>
            <span className='inline-block animate-[wave_1.8s_1.8s] hover:animate-wave'>
              👋
            </span>
          </h1>
          <p className='py-4 text-gray-600 text-2xl dark:text-white sm:max-w-[70%] m-auto animate-subtitle'>
            Let's hang out and stuff
          </p>
          <div className='flex items-center justify-between max-w-[330px] m-auto py-4 '>
            {socials}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
