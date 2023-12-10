import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateBoardDto } from './dto';

@Injectable()
export class BoardService {
  constructor(private prisma: PrismaService) {}

  async listBoard() {
    const list = await this.prisma.board.findMany({
      orderBy: {
        createdAt: 'asc',
      },
    });
    return list;
  }

  async readBoard(bid: string) {
    const board = await this.prisma.board.findUnique({
      where: {
        id: bid,
      },
    });
    if (!board) {
      throw new BadRequestException('BOARD_NOT_FOUND');
    }
    return board;
  }

  async createBoard() {
    return this.prisma.board.create({
      data: {
        hashtags: [],
      },
    });
  }

  async updateBoard(bid: string, dto: UpdateBoardDto) {
    const board = await this.prisma.board.findUnique({
      where: {
        id: bid,
      },
    });
    if (!board) {
      throw new BadRequestException('BOARD_NOT_FOUND');
    }
    return this.prisma.board.update({
      where: {
        id: bid,
      },
      data: {
        ...dto,
      },
    });
  }

  async deleteBoard(bid: string) {
    const board = await this.prisma.board.findUnique({
      where: {
        id: bid,
      },
    });
    if (!board) {
      throw new BadRequestException('BOARD_NOT_FOUND');
    }
    return this.prisma.board.delete({
      where: {
        id: bid,
      },
      select: {
        title: true,
      },
    });
  }
}
