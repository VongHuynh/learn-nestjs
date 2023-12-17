import { Body, Controller, Get, Param,Put, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/createUserDto';
import { UserService } from './user.service';
import { CommentService } from 'src/comment/comment.service';
import { updateUserDto } from './dto/updateUserDto';


@Controller('user')
export class UserController {
    constructor(
        private readonly userService:UserService,
        private readonly commentService:CommentService,
        ){}
    @Get(':id')
    findOne(@Param("id") id:number){
        return this.userService.findOne(id)
    }

    @Post()
    create(@Body() CreateUser: CreateUserDto){
        return this.userService.create(CreateUser);
    }

    @Put(":id")
    update(@Param("id") id: number, @Body() updateUserDto: updateUserDto){
        const user = this.userService.update(id, updateUserDto);
        return user;
    }

    @Get(":id/comments")
    getUserComment(@Param("id") id:string){
        return this.commentService.findUserComments(id)
    }

}
