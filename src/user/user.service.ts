import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/createUserDto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from 'src/entities/user.entity';
import { updateUserDto } from './dto/updateUserDto';

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
        return await this.userRepo.save(user)
    }

    async update(id: number, updateUser: updateUserDto) {
        return await this.userRepo.update(id, updateUser)
    }
}
