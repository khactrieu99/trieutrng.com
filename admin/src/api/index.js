import { getAllTags, createTag, removeTag } from "./Tag"
import { getAllArticles, createArticle, getArticleBySlug, updateArticle, removeArticle } from "./Article";
import { doLogin, doLogout } from "./Auth";

export default {
  doLogin, 
  doLogout,

  getAllTags,
  createTag,
  removeTag,

  getAllArticles,
  createArticle,
  getArticleBySlug,
  removeArticle,
  updateArticle
};