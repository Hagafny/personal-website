import React from "react";

const TALKS = [
  {
    title: "Virtuka",
    text: "This was my virtuka shit",
    image: "",
    youtubeSrc: "",
    date: "yesterday",
  },
  {
    title: "Kanta",
    text: "This was my Kanta shit",
    image: "",
    youtubeSrc: "",
    date: "yesterday",
  },
  {
    title: "Builder",
    text: "This was my Builder shit",
    image: "",
    youtubeSrc: "",
    date: "yesterday",
  },
];

const talks = () => {
  return (
    <div className='max-w-[1240px] mx-auto px-2 py-20'>
      <div className='grid md:grid-cols-2'>
        {TALKS.map((talk) => {
          const { title, text, image, youtubeSrc, date } = talk;
          return (
            <div
              key={youtubeSrc}
              className='relative flex h-full w-full flex-col rounded-lg bg-gray-100 p-6 dark:bg-gray-800 md:p-16'
            >
              <div className='mb-8 flex flex-none flex-col justify-between md:flex-row'>
                <div className='inline-flex items-baseline'>
                  <div className='block h-3 w-3 flex-none rounded-full bg-green-600'></div>
                  <p className='text-lg font-medium text-black dark:text-white pl-4'>
                    {date}
                  </p>
                </div>
              </div>
              <a
                className='mb-4 flex h-48 flex-none items-end'
                href='/talks/front-conf-2023-keynote'
              >
                <div class='text-2xl font-medium md:text-3xl text-black dark:text-white'>
                  {title}
                </div>
              </a>
              <div className='mb-10 flex-auto'>
                <div className='max-w-full text-lg text-secondary html mb-20 prose prose-light dark:prose-dark'>
                  <p>{text}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default talks;
