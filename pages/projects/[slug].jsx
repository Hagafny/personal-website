import { createClient } from "contentful";
import React from "react";
import ProjectPage from "../../components/Project";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
});

export const getStaticPaths = async () => {
  const res = await client.getEntries({
    content_type: "blogPost",
  });

  const paths = res.items.map((item) => {
    return {
      params: { slug: item.fields.slug },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export async function getStaticProps({ params: { slug } }) {
  const { items } = await client.getEntries({
    content_type: "blogPost",
    "fields.slug": slug,
  });

  return {
    props: { post: items[0] },
  };
}

export default function Project({ post }) {
  return <ProjectPage {...post.fields} />;
}
