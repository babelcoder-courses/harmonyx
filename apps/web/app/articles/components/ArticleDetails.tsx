import CommentList from "@/app/comments/components/CommentList";
import { getArticle } from "../api";
import * as types from "../types";

interface ArticleDetails {
  slug: types.ArticleDetails["slug"];
}

const ArticleDetails = async ({ slug }: ArticleDetails) => {
  const article = await getArticle(slug);

  return (
    <article>
      <header>
        <h1>{article.title}</h1>
      </header>
      <p>{article.content}</p>
      <CommentList articleId={article.id}></CommentList>
    </article>
  );
};

export default ArticleDetails;
