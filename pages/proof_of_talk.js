import React from "react";
import Parser from "rss-parser";

const RSS_FEED = "https://feeds.simplecast.com/Xjf9OkeD";

const ProofOfTalk = ({ feed }) => {
  return (
    <div className='max-w-[1240px] mx-auto px-2 py-16'>
      <div className='grid md:grid-cols-2 gap-8'>
        {feed.map((feedItem) => {
          const { id, ...episodeProps } = feedItem;
          return <Episode key={id} {...episodeProps} />;
        })}
      </div>
    </div>
  );
};

const Episode = ({ title, link, isoDate, image, episode, season }) => {
  return (
    <a href={link} target='_blank' rel='noreferrer'>
      <div
        style={{
          backgroundImage: `url(${image})`,
        }}
        className='flex items-center justify-center h-[600px] w-full shadow-md shadow-gray-400 rounded-xl cursor-pointer m-4 bg-cover hover:opacity-50 duration-300
        '
      ></div>
    </a>
  );
};

export async function getStaticProps() {
  const parser = new Parser();
  const feed = await parser.parseURL(RSS_FEED);
  const items = feed.items.map((feedItem) => {
    const {
      guid,
      title,
      isoDate,
      link,
      itunes: { image, episode, season },
    } = feedItem;

    return {
      id: guid,
      title,
      link,
      isoDate,
      image,
      episode,
      season,
    };
  });

  return {
    props: {
      feed: items,
    },
    revalidate: 30,
  };
}

export default ProofOfTalk;
