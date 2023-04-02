import client from "./Client";
import { CREATE_ARTICLE, GET_ALL_ARTICLES, GET_ARTICLE_BY_SLUG, REMOVE_ARTICLE, UPDATE_ARTICLE } from "./EndPoints";

export const getAllArticles = () => {
  const url = GET_ALL_ARTICLES;
  return client.get(url);
};

export const createArticle = ({title, content, slug, description, banner, tags}) => {
  const url = CREATE_ARTICLE;
  return client.post(url, new URLSearchParams({
    title, 
    content,
    slug,
    description, 
    banner,
    tags
  }));
}


export const updateArticle = ({id, title, content, slug, description, banner, tags}) => {
  const url = UPDATE_ARTICLE;
  return client.post(url, new URLSearchParams({
    id,
    title, 
    content,
    slug,
    description, 
    banner,
    tags
  }));
}

export const removeArticle = (id) => {
  const url = REMOVE_ARTICLE;
  return client.post(url, new URLSearchParams({id}));
}


export const getArticleBySlug = (slug) => {
  const url = GET_ARTICLE_BY_SLUG + slug;
  return client.get(url);
}