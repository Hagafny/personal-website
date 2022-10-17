export const entryToBlogPostData = (item) => {
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
