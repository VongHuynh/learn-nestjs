import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/createUserDto';
import { UserService } from './user.service';
import { CommentService } from 'src/comment/comment.service';

@Controller('user')
export class UserController {
    constructor(
        private readonly userService:UserService,
        private readonly commentService:CommentService,
        ){}
    @Get(':id')
    findOne(@Param("id") id:string){
        return this.userService.findOne(id)
    }

    @Post()
    create(@Body() CreateUser: CreateUserDto){
        return this.userService.create(CreateUser);
    }

    @Get(":id/comments")
    getUserComment(@Param("id") id:string){
        return this.commentService.findUserComments(id)
    }

}
