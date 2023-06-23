import { IsNotEmpty, Min } from 'class-validator';

export class CreateCommentDto {
  @IsNotEmpty()
  content: string;

  @Min(1)
  articleId: number;
}
