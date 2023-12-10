import { applyDecorators } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateUpdateBoardResponse } from './response';
import { DeleteBoardResponse } from './response/delete-board.response';

export class BoardDocs {
  public static Controller() {
    return applyDecorators(ApiTags('Board API'));
  }

  public static ListBoard() {
    return applyDecorators(
      ApiOperation({
        summary: 'List board',
      }),
      ApiOkResponse({
        type: CreateUpdateBoardResponse,
        isArray: true,
      }),
    );
  }

  public static ReadBoard() {
    return applyDecorators(
      ApiOperation({
        summary: 'Read board',
      }),
      ApiOkResponse({
        type: CreateUpdateBoardResponse,
      }),
    );
  }

  public static CreateBoard() {
    return applyDecorators(
      ApiOperation({
        summary: 'Create Board',
      }),
      ApiOkResponse({
        type: CreateUpdateBoardResponse,
      }),
    );
  }

  public static UpdateBoard() {
    return applyDecorators(
      ApiOperation({
        summary: 'Update Board',
      }),
      ApiOkResponse({
        type: CreateUpdateBoardResponse,
      }),
    );
  }

  public static DeleteBoard() {
    return applyDecorators(
      ApiOperation({
        summary: 'Delete Board',
      }),
      ApiOkResponse({
        type: DeleteBoardResponse,
      }),
    );
  }
}
