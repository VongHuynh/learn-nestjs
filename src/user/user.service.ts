import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/createUserDto';

@Injectable()
export class UserService {
    findOne(id:string){
        return{
            id:id
        }
    }

    create(createUser: CreateUserDto) {
        return createUser;
    }
}
