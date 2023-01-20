import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { BugsController } from './bug.controller';
import { BugProviders } from './bug.providers';
import { BugService } from './bug.service';

@Module({
  imports: [DatabaseModule],
  controllers: [BugsController],
  providers: [...BugProviders, BugService],
  exports: [],
})
export class BugModule {}
