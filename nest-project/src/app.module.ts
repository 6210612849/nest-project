import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { UserService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { User } from './database/entity/User';

@Module({
  imports: [TypeOrmModule.forFeature([User]), DatabaseModule],
  controllers: [AppController],
  providers: [UserService],
})
export class AppModule { }
