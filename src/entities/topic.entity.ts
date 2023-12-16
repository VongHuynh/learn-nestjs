import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Commnent } from "./comment.entity";



@Entity()
export class Topic {

    @PrimaryGeneratedColumn()
    id: number; 

    @Column()
    title: string;

    @Column()
    description: string;

    @OneToMany((type) => Commnent, (comment) => comment.topic)
    comments: Commnent[];

}