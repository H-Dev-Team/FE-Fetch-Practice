import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { Prisma, PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService
  extends PrismaClient<Prisma.PrismaClientOptions, 'query'>
  implements OnModuleInit
{
  private logger = new Logger();
  private contextName = 'Prisma ORM';
  constructor() {
    super({
      log: [
        {
          emit: 'event',
          level: 'query',
        },
      ],
    });
  }

  async onModuleInit() {
    await this.$connect();
    Object.assign(
      this,
      this.$on('query', (event) => {
        this.logger.debug(
          `Query - ${event.query}, Duration - ${event.duration}ms`,
          this.contextName,
        );
      }),
    );
  }
}
