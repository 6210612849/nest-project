import { GetUserDTO,CreateUserDTO, LoginRequest} from './type/type';
import { Body, Controller, Get, Post,Request, UseGuards } from '@nestjs/common';
import { UserService } from './app.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('user')
export class AppController {
  constructor(private readonly appService: UserService) { }


  @Post()
  public async createOne(@Body() createUserRequest: CreateUserDTO) {
    try {
    const res = await this.appService.createTestOne(createUserRequest);
    return res
    }
    catch (e){
      throw e
    }
   
  }

  @Get()
  public async getlUserByUsername(createUserRequest: GetUserDTO) {
    const res = await this.appService.getUserByUsername(createUserRequest);
    return res;
  }

  @UseGuards(AuthGuard('local'))
  @Post('/login')
  public async loginByUserPassword(@Request() req){
    console.log('controller',req.user)
    return req.user
  }
}
