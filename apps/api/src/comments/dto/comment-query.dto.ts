import { Min } from 'class-validator';
import { Transform } from 'class-transformer';

export class CommentQueryDto {
  @Transform(({ value }) => +value)
  @Min(1)
  articleId: number;
}
