import { getArticles } from "../api";
import ArticleDetails from "../components/ArticleDetails";

export const dynamic = "force-static";

export const generateStaticParams = async () => {
  const articles = await getArticles(3);

  return articles.map((article) => ({ slug: article.slug }));
};

interface ArticleDetailsPageProps {
  params: {
    slug: string;
  };
}

const ArticleDetailsPage = ({ params: { slug } }: ArticleDetailsPageProps) => {
  return <ArticleDetails slug={slug}></ArticleDetails>;
};

export default ArticleDetailsPage;
