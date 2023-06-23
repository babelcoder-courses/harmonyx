import fetchApi from "../lib/fetchApi";
import { ArticleDetails, ArticleItem } from "./types";

export const getArticles = async (limit?: number) => {
  let path = "/articles";
  if (limit) path += `?limit=${limit}`;

  const res = await fetchApi(path, {
    next: { revalidate: 60 * 60 * 2 },
  });
  const articles: ArticleItem[] = await res.json();

  return articles;
};

export const getArticle = async (slug: ArticleDetails["slug"]) => {
  const res = await fetchApi(`/articles/${slug}`);
  const article: ArticleDetails = await res.json();

  return article;
};
