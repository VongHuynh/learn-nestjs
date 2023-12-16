import { Topic } from './topic.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from './user.entity';


@Entity()
export class Commnent {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    text: string;

    @ManyToOne((type) => User, (user) => user.comments)
    user: User;

    @ManyToOne((type) => Topic, (topic) => topic.comments)
    topic: Topic;

}