import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from "typeorm"

@Entity({ name: "usertest" })
export class User {

    @PrimaryGeneratedColumn("uuid")
    uuid: number

    @Column({ name: "first" })
    username: string

    @Column({ name: "mail", nullable: true, })
    email: string

    @Column({ name: "hash" })
    password: string

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
    create_time: Date
}
