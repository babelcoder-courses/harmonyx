import { Injectable } from '@nestjs/common';
import { CreateArticleDto } from './dto/create-article.dto';
import { PrismaService } from 'src/shared/prisma.service';
import { slugify } from 'src/shared/helpers/slugify';
import { Article, User } from '@prisma/client';
import { ArticleListQueryDto } from './dto/article-list-query.dto';

@Injectable()
export class ArticlesService {
  constructor(private prisma: PrismaService) {}

  create(authorId: User['id'], createArticleDto: CreateArticleDto) {
    return this.prisma.article.create({
      data: {
        ...createArticleDto,
        slug: slugify(createArticleDto.title),
        authorId,
      },
    });
  }

  findAll({ limit }: ArticleListQueryDto) {
    return this.prisma.article.findMany({
      take: limit ? +limit : undefined,
    });
  }

  findBySlug(slug: Article['slug']) {
    return this.prisma.article.findUnique({ where: { slug } });
  }
}
