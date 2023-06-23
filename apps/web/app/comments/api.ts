import { ArticleDetails } from "@/app/articles/types";
import fetchApi from "../lib/fetchApi";
import { CommentDetails } from "./types";

export const getComments = async (articleId: ArticleDetails["id"]) => {
  const res = await fetchApi(`/comments?articleId=${articleId}`);
  const comments: CommentDetails[] = await res.json();

  return comments;
};
