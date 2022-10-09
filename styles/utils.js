export const entryToBlogPostData = (item) => {
  const {
    fields: { title, slug, featured },
  } = item;

  return {
    title,
    slug,
    featured: `https://${featured.fields.file.url}`,
  };
};
