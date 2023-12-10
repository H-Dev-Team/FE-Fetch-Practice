import { PickType } from '@nestjs/swagger';
import { BoardDomain } from '../../../domain';

export class DeleteBoardResponse extends PickType(BoardDomain, ['title']) {
  title: string;
}
