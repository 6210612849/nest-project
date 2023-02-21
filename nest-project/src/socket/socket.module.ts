import { Module } from "@nestjs/common";
import { PollGateway } from "./polls.gateway";

@Module({
    
    providers:[PollGateway],
})
export class SocketModule{}