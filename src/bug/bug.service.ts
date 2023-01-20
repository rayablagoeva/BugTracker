import {
  BadRequestException,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { DataSource, In, Repository } from 'typeorm';
import { BugDto } from './bug.dto';
import { Bug } from './bug.entity';
import { rm } from 'fs/promises';

@Injectable()
export class BugService {
  constructor(
    @Inject('BUG_REPOSITORY')
    private bugRepository: Repository<Bug>,
    @Inject('DATA_SOURCE')
    private dataSource: DataSource,
  ) {}

  public async getAllBugsByDateOfDiscovery(dateOfDiscovery: string){
    const bugs = await this.bugRepository.find({
        where: { dateOfDiscovery }
      });
      return bugs;
} 

  public async updateOne(id: number,bugDto: BugDto): Promise<Bug> {
    let persistedBug = await this.bugRepository.findOne({
      where: { id }
    });
    if (!persistedBug) {
      throw new NotFoundException(`Bug with id ${id} was not found.`);
    }
  
    persistedBug = await this.bugRepository.save({ ... persistedBug, ...bugDto });
    return persistedBug;
  }


  public async createOne(bug: BugDto)  {
    let createdBug = (await (
      await this.bugRepository.insert(bug)
    ).identifiers[0]) as BugDto;
    createdBug = await this.bugRepository.findOne({
      where: { id: createdBug.id }
    });
    return createdBug;
  }

  public async deleteOne(id: number) {
    let persistedBug= await this.bugRepository.findOne({
      where: { id }
    });
    if (!persistedBug) {
      throw new NotFoundException(`Bug with id ${id} was not found.`);
    }
    persistedBug = (await this.bugRepository.delete({ id }))?.raw;
    return persistedBug;
  }

}
