import { BeforeInsert, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import * as bcrypt from 'bcrypt'
import { Comment } from "./comment.entity";


@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({unique: true, nullable: false})
    name:string;

    @Column({unique: true, nullable: false})
    email: string

    @Column({nullable: false})
    password: string

    @OneToMany((type) => Comment, (comment) => comment.user)
    comments: Comment[];

    @BeforeInsert()
    async hashPasword(){
        this.password = await bcrypt(this.password, 10)
    }
}