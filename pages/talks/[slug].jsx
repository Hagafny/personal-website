import React from "react";
import TalkPage from "../../components/Talk";
import CmsService from "../../services/cms/cmsService";
import { CONTENT_MODELS } from "../../services/cms/mappers";

export const getStaticPaths = async () => {
  const paths = await new CmsService(CONTENT_MODELS.TALK).getPaths();

  return {
    paths,
    fallback: false,
  };
};

export async function getStaticProps({ params: { slug } }) {
  const post = await new CmsService(CONTENT_MODELS.TALK).getEntity(slug);
  return {
    props: { post },
  };
}

export default function Project({ post }) {
  return <TalkPage {...post.fields} />;
}
