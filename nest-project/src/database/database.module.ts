import { Module,Global } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from '../ormconfig'

@Module({
imports: [
  TypeOrmModule.forRoot({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'docker',
  password: 'password',
  database: 'test',
  autoLoadEntities: true,
  synchronize: true}),
  ]})
export class DatabaseModule { }
