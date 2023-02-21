import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException, Dependencies, Body, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginRequest } from 'src/type/type';
import { getUserDTO } from 'src/dto/get-task.dto';

@Injectable()
@Dependencies(AuthService)
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService:AuthService) {
    super();
    this.authService = authService;
    console.log("working auth")
  }

  public async validate(username,password) {
    console.log("what dafuq",password)
    const myValidate:LoginRequest ={username:username,password:password} 
    const user = await this.authService.validateUser(myValidate);
    if (user == null) {
        console.log("b4 hegot",)
      throw new UnauthorizedException();
    }
    else {
        console.log("hegot")
        return user
    }
  }
}