import { Module } from '@nestjs/common';
// import { UserService } from './user.service';
// import { UserController } from './user.controller';
import { PrismaModule } from '~modules/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  // exports: [UserService],
  // controllers: [UserController],
  // providers: [UserService],
})
export class InvoiceUserModule {}
