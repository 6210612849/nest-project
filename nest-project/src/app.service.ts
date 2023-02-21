import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { createUserDTO, getUserDTO } from './dto/get-task.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './database/entity/User';
import { Repository } from 'typeorm'
import { myEncrypted, mySalt } from './util/myRandom';
// import { createCipheriv, randomBytes, scrypt } from 'crypto';
// import { promisify } from 'util';
@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private UserRepo: Repository<User>) { console.log("injected complete") }
  public async createTestOne(modelGetTaskRequest: createUserDTO) {
    try {
      const user: User = new User();
      user.username = modelGetTaskRequest.username;
      if (modelGetTaskRequest.mail) {
        user.email = modelGetTaskRequest.mail
      }
      // const iv = randomBytes(8);
      const password = await myEncrypted(modelGetTaskRequest.password,mySalt);
      // const key = (await promisify(scrypt)(password, 'salt', 32)) as Buffer;
      // const cipher = createCipheriv('aes-256-ctr', key, iv);

      // const textToEncrypt = 'Nest';
      // const encryptedText = Buffer.concat([
      //   cipher.update(textToEncrypt),
      //   cipher.final(),
      // ]);
      user.password = password 
      await this.UserRepo.save(user);
      return {data:user.username,status:HttpStatus.OK}
    }
    catch (e) {
     throw Error(e);
     
    }
  }


  public async getUserByUsername(modelGetTaskRequest: getUserDTO) {
    const myData = await this.UserRepo.findOne({where:{username:modelGetTaskRequest.username}});
    console.log("nani",myData)
    return myData
  }
  
}

