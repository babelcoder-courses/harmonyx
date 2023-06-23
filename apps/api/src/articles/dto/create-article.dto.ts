import { IsString, Length, IsNotEmpty } from 'class-validator';

export class CreateArticleDto {
  @IsString()
  @Length(1, 50)
  title: string;

  @IsString()
  @IsNotEmpty()
  excerpt: string;

  @IsString()
  @IsNotEmpty()
  content: string;
}
