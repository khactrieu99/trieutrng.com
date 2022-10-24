import client from "./Client";
import { GET_ARTICLES_BY_TAG } from "./EndPoints";

export const getArticlesByTag = (tag) => {
  const url = GET_ARTICLES_BY_TAG + tag;
  return client.get(url);
};