import { createClient } from "contentful";
import { CONTENT_MODELS, getContentMapper } from "./mappers";

function getContent(contentModel) {
  return async function () {
    const client = createClient({
      space: process.env.CONTENTFUL_SPACE_ID,
      accessToken: process.env.CONTENTFUL_ACCESS_KEY,
    });

    const resEntries = await client.getEntries({ content_type: contentModel });

    return resEntries.items.map(getContentMapper(contentModel));
  };
}

const cmsService = {
  getTalks: getContent(CONTENT_MODELS.TALK),
  getProjects: getContent(CONTENT_MODELS.BLOG_POST),
};

export default cmsService;
