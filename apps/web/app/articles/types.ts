export interface ArticleItem {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
}

export interface ArticleDetails extends ArticleItem {
  content: string;
}

export type CreateArticleForm = Omit<ArticleDetails, "id" | "slug">;
