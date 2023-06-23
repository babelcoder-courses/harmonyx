import ProtectedResource from "@/app/auth/guards/ProtectedResource";
import { getArticles } from "../api";
import ArticleItem from "./ArticleItem";
import Link from "next/link";

const ArticleList = async () => {
  const articles = await getArticles();

  return (
    <>
      <ProtectedResource role="ADMIN">
        <div className="flex justify-end my-4">
          <Link
            href="/articles/new"
            className="bg-primary-500 rounded-md p-2 text-white"
          >
            Create New Article
          </Link>
        </div>
      </ProtectedResource>
      <div className="grid grid-cols-3 gap-2">
        {articles.map((article) => (
          <ArticleItem key={article.id} {...article}></ArticleItem>
        ))}
      </div>
    </>
  );
};

export default ArticleList;
