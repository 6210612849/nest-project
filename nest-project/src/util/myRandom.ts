import { customAlphabet } from "nanoid";
import * as bcrypt from 'bcrypt';

export const createRoomID = customAlphabet(
    '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    6,
  );
export const mySalt = 0;

export async function  myEncrypted(text:string,salt:number){
    const hashed = await bcrypt.hash(text,salt)
    return hashed

}