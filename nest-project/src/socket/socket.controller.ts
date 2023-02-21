import { Body, Controller, Get, HttpException, HttpStatus, Post,Res } from '@nestjs/common';
import { Room } from 'src/database/entity/Room';
import { CreateChatDto,JoinChatDto } from 'src/dto/chat-dto';
import { PollGateway } from './polls.gateway';
import { PollService } from './polls.service';

@Controller('chat')
export class SocketController {
  constructor(private readonly pollService: PollService) { }

  @Post()
  public async create(@Body() data:CreateChatDto){
    try {
    console.log("55",data)
   const res = await this.pollService.createRoom(data)
   return {message:`create success ${res.data}`,status:res.status}
    }
  catch (e){
    throw e
  }
  }

    
   @Post('/join')
   public async join(@Body()  joinChatDto:JoinChatDto,){
   try{
    const res = await this.pollService.joinRoom(joinChatDto)
    return {message:"join success",status:res}
    
   }
   catch (e){
     throw e
   }
  
}
}
