import Link from "next/link";
import * as types from "../types";

const ArticleItem = ({ slug, title, excerpt }: types.ArticleItem) => {
  return (
    <Link href={`/articles/${slug}`}>
      <article>
        <header>{title}</header>
        <p>{excerpt}</p>
      </article>
    </Link>
  );
};

export default ArticleItem;
