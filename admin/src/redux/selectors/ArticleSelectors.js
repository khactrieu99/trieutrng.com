import { createSelector } from "@reduxjs/toolkit";

export const getAllArticle = state => state.article.articles;
export const getCurrentViewSlug = state => state.article.currentViewedSlug;
export const getCurrentOffset = state => state.article.currentOffset;

export const getCurrentViewArticle = createSelector(
  getAllArticle,
  getCurrentViewSlug,
  (articles, slug) => articles.find(article => article.slug === slug)
);