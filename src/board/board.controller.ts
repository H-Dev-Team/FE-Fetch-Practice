import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { BoardService } from './board.service';
import { UpdateBoardDto } from './dto';
import { BoardDocs } from './board.docs';

@Controller('board')
@BoardDocs.Controller()
export class BoardController {
  constructor(private boardService: BoardService) {}

  @Get('/board')
  @BoardDocs.ListBoard()
  listBoard() {
    return this.boardService.listBoard();
  }

  @Get('/board/:bid')
  @BoardDocs.ReadBoard()
  readBoard(@Param('bid') bid: string) {
    return this.boardService.readBoard(bid);
  }

  @Post('/board')
  @BoardDocs.CreateBoard()
  createBoard() {
    return this.boardService.createBoard();
  }

  @Patch('/board/:bid')
  @BoardDocs.UpdateBoard()
  updateBoard(@Param('bid') bid: string, @Body() dto: UpdateBoardDto) {
    return this.boardService.updateBoard(bid, dto);
  }

  @Delete('/board/:bid')
  @BoardDocs.DeleteBoard()
  deleteBoard(@Param('bid') bid: string) {
    return this.boardService.deleteBoard(bid);
  }
}
