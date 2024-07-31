import { createClient } from "microcms-js-sdk";
import type {
  MicroCMSQueries,
  MicroCMSImage,
  MicroCMSListContent,
} from "microcms-js-sdk";

export type Introduction = {
  name: string;
  profile: string;
  image: MicroCMSImage;
} & MicroCMSListContent;

export type Blog = {
  title: string;
  Image: MicroCMSImage;
  body: string;
} & MicroCMSListContent;

if (!process.env.MICROCMS_SERVICE_DOMAIN) {
  throw new Error("MICROCMS_SERVICE_DOMAIN is required");
}

if (!process.env.MICROCMS_API_KEY) {
  throw new Error("MICROCMS_API_KEY is required");
}

const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: process.env.MICROCMS_API_KEY,
});

export const getIntroduction = async (queries?: MicroCMSQueries) => {
  const listData = await client.getList<Introduction>({
    endpoint: "introduction",
    queries,
  });
  return listData;
};

export const getBlogDetail = async (
  slug: string,
  queries?: MicroCMSQueries
) => {
  const listData = await client.getList<Blog>({
    endpoint: "blog",
    queries,
  });
  return listData;
};
