export const CONTENT_MODELS = {
  BLOG_POST: "blogPost",
  TALK: "talk",
  PROJECT: "project",
};

const entryToBlogPostData = (item) => {
  const {
    fields: { title, slug, featured, subtitle },
  } = item;

  const imageDimensions = featured.fields.file.details.image;

  return {
    title,
    subtitle,
    slug,
    featured: {
      src: `https://${featured.fields.file.url}`,
      ...imageDimensions,
    },
  };
};

const CONTENT_MAPPERS = {
  [CONTENT_MODELS.BLOG_POST]: entryToBlogPostData,
  [CONTENT_MODELS.TALK]: entryToBlogPostData,
  [CONTENT_MODELS.PROJECT]: entryToBlogPostData,
};

export const getContentMapper = (entityType) => CONTENT_MAPPERS[entityType];
