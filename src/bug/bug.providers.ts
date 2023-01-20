import { DataSource } from 'typeorm';
import { Bug } from './bug.entity';

export const BugProviders = [
  {
    provide: 'BUG_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Bug),
    inject: ['DATA_SOURCE'],
  }
];
