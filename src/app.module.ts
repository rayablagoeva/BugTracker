import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { BugModule } from './bug/bug.module';

@Module({
  imports: [ConfigModule.forRoot(), BugModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
