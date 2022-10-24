import client from "./Client";
import { GET_ALL_ARTICLES, GET_ARTICLE_BY_SLUG } from "./EndPoints";

export const getAllArticles = () => {
  const url = GET_ALL_ARTICLES;
  return client.get(url);
};

export const getArticleBySlug = (slug) => {
  const url = GET_ARTICLE_BY_SLUG + slug;
  return client.get(url);
}