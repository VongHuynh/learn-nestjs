import { Report } from './../reports/report.entity';
import { AfterInsert, 
        AfterUpdate, 
        Entity, 
        Column, 
        PrimaryGeneratedColumn,
        OneToMany
    } from "typeorm";


@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    email: string;

    @Column()
    password: string;

    @OneToMany(() => Report, (report) => report.user)
    reports: Report[];

    @AfterInsert()
    logInsert() {
        console.log('Inserted User with it', this.id)
    }

    @AfterUpdate()
    logUpdate() {
        console.log('Updated User with it', this.id)
    }

    @AfterInsert()
    logRemove() {
        console.log('Removed User with it', this.id)
    }

}