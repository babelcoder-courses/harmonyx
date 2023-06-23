import { IsNumberString, IsOptional } from 'class-validator';

export class ArticleListQueryDto {
  @IsOptional()
  @IsNumberString()
  limit?: string;
}
