import { Module } from '@nestjs/common';
import { DefautsController } from './defauts.controller';
import { DefautsService } from './defauts.service';

@Module({
  controllers: [DefautsController],
  providers: [DefautsService]
})
export class DefautsModule {}
