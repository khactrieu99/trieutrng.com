import { createSelector } from "@reduxjs/toolkit";

export const getAllArticle = state => state.article.articles;
export const getCurrentSlug = state => state.article.currentViewedSlug;
export const getCurrentOffset = state => state.article.currentOffset;

export const getCurrentArticle = createSelector(
  getAllArticle,
  getCurrentSlug,
  (articles, slug) => articles.find(article => article.slug === slug)
);