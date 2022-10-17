import { createClient } from "contentful";
import { getContentMapper } from "./mappers";

class CmsService {
  constructor(entityType) {
    this.entityType = entityType;
  }

  getClient() {
    return createClient({
      space: process.env.CONTENTFUL_SPACE_ID,
      accessToken: process.env.CONTENTFUL_ACCESS_KEY,
    });
  }

  async getAll() {
    const client = this.getClient();
    const resEntries = await client.getEntries({
      content_type: this.entityType,
    });
    return resEntries.items.map(getContentMapper(this.entityType));
  }
}

export default CmsService;
