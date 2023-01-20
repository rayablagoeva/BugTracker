import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  JoinTable,
} from 'typeorm';

@Entity()
export class Bug {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  description: string;

  @Column({length: 100 })
  dateOfDiscovery: string;

  @Column({ length: 50 })
  status: string;

  @Column({ length: 50 })
  nameOfProgrammer: string;
}
