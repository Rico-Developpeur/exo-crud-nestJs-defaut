import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DefautsModule } from './defauts/defauts.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [DefautsModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
