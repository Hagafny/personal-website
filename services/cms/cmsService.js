import { createClient } from "contentful";
import { getNextInternalQuery } from "next/dist/server/request-meta";
import { getContentMapper } from "./mappers";

class CmsService {
  constructor(entityType) {
    this.entityType = entityType;
    this.client = this.getClient();
  }

  getClient() {
    return createClient({
      space: process.env.CONTENTFUL_SPACE_ID,
      accessToken: process.env.CONTENTFUL_ACCESS_KEY,
    });
  }

  getEntries({ ...queryProps } = {}) {
    return this.client.getEntries({
      content_type: this.entityType,
      ...queryProps,
    });
  }

  async getAll() {
    const resEntries = await this.getEntries();
    return resEntries.items.map(getContentMapper(this.entityType));
  }

  async getPaths() {
    const resEntries = await this.getEntries();

    const paths = resEntries.items.map((item) => {
      return {
        params: { slug: item.fields.slug },
      };
    });

    return paths;
  }

  async getEntity(slug) {
    const { items } = await this.getEntries({
      "fields.slug": slug,
    });

    return items[0];
  }
}

export default CmsService;
