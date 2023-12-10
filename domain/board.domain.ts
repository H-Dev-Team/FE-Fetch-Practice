import { ApiProperty } from '@nestjs/swagger';
import { Board, Prisma } from '@prisma/client';

export class BoardDomain implements Board {
  @ApiProperty()
  id: string;

  @ApiProperty()
  title: string;

  @ApiProperty()
  content: string;

  @ApiProperty({
    type: 'string',
    isArray: true,
  })
  hashtags: Prisma.JsonValue;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
