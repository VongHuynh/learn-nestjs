import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/createUserDto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from 'src/entities/user.entity';
import { updateUserDto } from './dto/updateUserDto';
import { log } from 'console';

@Injectable()
export class UserService {

    constructor(
        @InjectRepository(User) private readonly userRepo: Repository<User>
        ){}

    async findOne(id:number){
        return await this.userRepo.findOne({where:{id : id}})
    }

    async create(createUser: CreateUserDto) {
        const user = await this.userRepo.create(createUser);
        const res = await this.userRepo.save(user)
        delete res.password;
        return res;
    }

    async update(id: number, updateUser: updateUserDto) {
        console.log({id,...updateUser});
        const userRes = await this.userRepo.save({
            id,
            ...updateUser
        })
        return userRes;
    }
}