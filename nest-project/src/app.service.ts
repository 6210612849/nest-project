import { HttpException, Injectable } from '@nestjs/common';
import { GetTaskDTO } from './dto/get-task.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './database/entity/User';
import { Repository } from 'typeorm'
// import { createCipheriv, randomBytes, scrypt } from 'crypto';
// import { promisify } from 'util';
@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private UserRepo: Repository<User>) { console.log("injected complete") }
  public async createTestOne(modelGetTaskRequest: GetTaskDTO) {
    try {


      const user: User = new User();
      user.username = modelGetTaskRequest.username;
      if (modelGetTaskRequest.mail) {
        user.email = modelGetTaskRequest.mail
      }
      // const iv = randomBytes(8);
      const password = 'ahehe';
      // const key = (await promisify(scrypt)(password, 'salt', 32)) as Buffer;
      // const cipher = createCipheriv('aes-256-ctr', key, iv);

      // const textToEncrypt = 'Nest';
      // const encryptedText = Buffer.concat([
      //   cipher.update(textToEncrypt),
      //   cipher.final(),
      // ]);
      user.password = password
      await this.UserRepo.save(user);
    }
    catch (e) {
      return Error(e)
    }
  }


  public async getTestAll(modelGetTaskRequest: GetTaskDTO) {
    const myData = await this.UserRepo.find();
    const myDataJson = JSON.parse(JSON.stringify(myData));
    console.log(myData)
    return myDataJson
  }
}

