export type CreateChatDto = {
    
    user1: string;
    user2: string;
   
}

export type JoinChatDto = {
    chatGenerate: string; 
    myID: string;
}
export type CreateUserDTO = {
    username: string;
    mail?: string;
    password: string;
}
export type GetUserDTO = {
    username: string;
}

export type LoginRequest = {
    username: string;
    password: String;
}