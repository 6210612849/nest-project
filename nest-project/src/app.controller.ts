import { GetTaskDTO } from './dto/get-task.dto';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './app.service';

@Controller('user')
export class AppController {
  constructor(private readonly appService: UserService) { }


  @Post()
  public async createOne(@Body() createUserRequest: GetTaskDTO) {
    const res = await this.appService.createTestOne(createUserRequest);
    return res;
  }

  @Get()
  public async getAllUser(createUserRequest: GetTaskDTO) {
    const res = await this.appService.getTestAll(createUserRequest);
    return res;
  }
}
