import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from "typeorm"

@Entity({ name: "cuurentRoom" })
export class Room {

    @PrimaryGeneratedColumn("uuid")
    cid: number

    @Column()
    chatGenerate: string

    @Column()
    user1: string

    @Column()
    user2: string

    @Column({nullable:true})
    password: string

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", name: "create_time" })
    createdAt: Date
}
