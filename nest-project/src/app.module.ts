import { TypeOrmModule } from '@nestjs/typeorm';
import { Logger, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { UserService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { User } from './database/entity/User';
import { PollService } from './socket/polls.service';
import { SocketController } from './socket/socket.controller';
import { PollGateway } from './socket/polls.gateway';
import { Room } from './database/entity/Room';
import { SocketModule } from './socket/socket.module';
import { WebSocketGateway, WebSocketServer, OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect, SubscribeMessage, MessageBody } from '@nestjs/websockets';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './auth/local.strategy';
import { AuthService } from './auth/auth.service';
@Module({
  imports: [TypeOrmModule.forFeature([User,Room]), DatabaseModule,PassportModule],
  controllers: [AppController,SocketController],
  providers: [UserService,PollService,PollGateway,LocalStrategy,AuthService]
})
export class AppModule { }
