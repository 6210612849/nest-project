import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from "typeorm"

@Entity({ name: "wait" })
export class User {

    @PrimaryGeneratedColumn("uuid")
    uuid: number

    @Column({ name: "username" })
    username: string

    @Column({ name: "email", nullable: true, })
    email: string

    @Column({ name: "password" })
    password: string

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", name: "create_time" })
    create_time: Date
}
