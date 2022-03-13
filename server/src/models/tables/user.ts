import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { TimeColumns } from '../common/time-columns';

@Entity()
export class User extends TimeColumns {
  @PrimaryGeneratedColumn()
  public readonly id!: number;

  @Column('varchar', { nullable: false, unique: true, select: false })
  public oauthId!: string;

  @Column('varchar', { nullable: false, unique: false, select: false })
  public password!: string;

  @Column('varchar', { nullable: false, select: false })
  public name!: string;
}
