import { PickType } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';
import { IsArray, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { BoardDomain } from '../../../domain';

export class UpdateBoardDto extends PickType(BoardDomain, [
  'title',
  'content',
  'hashtags',
]) {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  content: string;

  @IsArray()
  @IsOptional()
  hashtags: Prisma.JsonValue;
}
