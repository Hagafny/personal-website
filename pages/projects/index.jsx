import React from "react";
import ProjectsGrid from "../../components/Projects";
import { createClient } from "contentful";

const Projects = ({ projects }) => {
  console.log(projects);
  return <ProjectsGrid projects={projects} />;
};

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const resEntries = await client.getEntries({ content_type: "blogPost" });
  console.log(resEntries);

  const formattedProjects = resEntries.items.map((item) => {
    const {
      fields: { title, slug, featured },
    } = item;

    return {
      title,
      slug,
      featured: `https://${featured.fields.file.url}`,
    };
  });

  return {
    props: {
      projects: formattedProjects,
    },
  };
}

export default Projects;

// import React from "react";
// import { createClient } from "contentful";

// const ProjectDetails = ({ posts }) => {
//   console.log(posts);
//   return <div>Yo</div>;
// };

// export async function getStaticProps() {
//   const client = createClient({
//     space: process.env.CONTENTFUL_SPACE_ID,
//     accessToken: process.env.CONTENTFUL_ACCESS_KEY,
//   });

//   const res = await client.getEntries({ content_type: "blogPost" });

//   return {
//     props: {
//       posts: res.items,
//     },
//   };
// }

// export default ProjectDetails;
