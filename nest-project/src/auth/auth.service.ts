import { Injectable, Dependencies, HttpStatus, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/app.service';
import * as bcrypt from 'bcrypt';
import { GetUserDTO, LoginRequest } from 'src/type/type';
import { getUserDTO } from 'src/dto/get-task.dto';
import { error } from 'console';
import { async } from 'rxjs';

@Injectable()
@Dependencies(UserService)
export class AuthService {
  constructor(private userService:UserService) {
    this.userService = userService;
  }

  async validateUser(loginRequest:LoginRequest) {
    const myUsername:GetUserDTO = {username:loginRequest.username}
    const user = await this.userService.getUserByUsername(myUsername);
    console.log(loginRequest.password,user,"aaadakkkkk")
    if (user){
    
        console.log(loginRequest.password,user,"aaadafuqaaa")
       const test = await bcrypt.compare(loginRequest.password,user.password)
     if (test){
        return user
     }
     else{
        return null
     }
    }
else
{
    throw HttpStatus.UNAUTHORIZED
}
    
  }
}