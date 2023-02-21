import { WebSocketGateway, WebSocketServer, OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect, SubscribeMessage, MessageBody } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { Logger } from '@nestjs/common';

// @WebSocketGateway(81,{transports:['websocket']})
// export class PollGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
//   @WebSocketServer() server: Server;

//   constructor(private logger: Logger = new Logger('ChatGateway')){}

//   afterInit(server: Server) {
//     console.log("init")
//     this.logger.log('Socket.IO server initialized');
//   }

//   handleConnection(client: Socket, ...args: any[]) {
//     this.logger.log('Client connected: ${client.id}');
//   }

//   handleDisconnect(client: Socket) {
//     this.logger.log('Client disconnected: ${client.id}');
//   }
//   @SubscribeMessage('events')
//     handleEvent(@MessageBody() data: string): string {
//   return data;
// }
// }
@WebSocketGateway()
export class PollGateway {
    @SubscribeMessage('event')
    onEvent(@MessageBody() body:any){
        console.log(body)
    }
}