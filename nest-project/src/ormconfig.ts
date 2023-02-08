import "reflect-metadata"
import { ConnectionOptions } from "typeorm"
import { User } from "./database/entity/User"


export const config: ConnectionOptions = {
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "123456789",
    database: "test",
    synchronize: true,
    logging: false,
    entities: [User],
    migrations: [],
    subscribers: [],

}
