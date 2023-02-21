import { Injectable,Logger,BadRequestException, HttpException, HttpStatus } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { InjectRepository } from "@nestjs/typeorm";
import { Room } from "src/database/entity/Room";
import { CreateChatDto, JoinChatDto } from "src/type/type";
import { createRoomID } from "src/util/myRandom";
import { Repository } from "typeorm";
import { Res } from "@nestjs/common";


@Injectable()
export class PollService {
    constructor(
    @InjectRepository(Room) private RoomRepo:Repository<Room>
    ){}
    public async createRoom(fields:CreateChatDto){
        try {
        const room:Room = new Room();
        room.chatGenerate = createRoomID();
        console.log("what how",fields)
        if (!fields.user1 || !fields.user2){
            throw new HttpException('Request create room invalid',HttpStatus.BAD_REQUEST)
        }
        console.log(fields.user1,fields.user2)
        room.user1 = fields.user1 || "3" 
        room.user2 = fields.user2 || "9"
        await this.RoomRepo.createQueryBuilder().insert().values(room).execute();
        return {data:room.chatGenerate,status:HttpStatus.OK}
 
        }
        catch (e){
            throw Error(e)
        }
    }

    public async joinRoom(fields:JoinChatDto){
        
            console.log("Suck")
            const tempRoom = await this.RoomRepo.findOne({where: {chatGenerate:fields.chatGenerate}})
            if (!tempRoom){
                console.log("Suck1")
                throw new HttpException("invalid room",HttpStatus.NOT_FOUND)
            }
            if ((tempRoom.user1 != null) && (tempRoom.user2 != null)){
                console.log("Suck2")
                throw new HttpException("room is full",HttpStatus.BAD_REQUEST)
            }
            if (tempRoom.user1 =null){
                tempRoom.user1 = fields.myID
            }
            else {
                tempRoom.user2 = fields.myID
            }
            this.RoomRepo.save(tempRoom)
            return HttpStatus.OK
        }
       
    }
