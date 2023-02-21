import { Socket } from "socket.io";
import { Express } from "express";


export class SocketService{
    constructor(private readonly socketService:Socket ) {
        
    }

}