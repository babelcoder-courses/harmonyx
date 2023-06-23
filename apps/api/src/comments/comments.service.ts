import { Injectable } from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import { Article, User } from '@prisma/client';
import { PrismaService } from 'src/shared/prisma.service';

@Injectable()
export class CommentsService {
  constructor(private prisma: PrismaService) {}

  create(userId: User['id'], form: CreateCommentDto) {
    return this.prisma.comment.create({
      data: {
        userId,
        ...form,
      },
    });
  }

  findAll(articleId: Article['id']) {
    return this.prisma.comment.findMany({
      where: { articleId },
      include: {
        user: {
          select: {
            name: true,
            email: true,
            image: true,
            role: true,
          },
        },
      },
    });
  }
}
