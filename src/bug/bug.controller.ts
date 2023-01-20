import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { BugDto } from './bug.dto';
import { BugService } from './bug.service';

@Controller('bug')
export class BugsController {
  constructor(private BugService: BugService) {}

  @Get('')
  async  getAllBugsByDateOfDiscovery(@Query('dateOfDiscovery') dateOfDiscovery: string) {
    const bugs = await this.BugService.getAllBugsByDateOfDiscovery(dateOfDiscovery);
    return bugs;
  }

  @Put(':id')
  async updateBug(@Param('id') id: number, @Body() bug: BugDto) {
    const bugs = await this.BugService.updateOne(id,bug);
    return bugs;
  }

  @Post()
  async addBug(@Body() bug: BugDto) {
    const bugs = await this.BugService.createOne(bug);
    return bugs;
  }

  @Delete()
  async deleteBug(@Query('id') id: number) {
    const bug = await this.BugService.deleteOne(id);
    return bug;
  }

  
}
