import { Body, Controller, Get, Param,Put, Post,  } from '@nestjs/common';
import { CreateUserDto } from './dto/createUserDto';
import { UserService } from './user.service';
import { CommentService } from 'src/comment/comment.service';
import { updateUserDto } from './dto/updateUserDto';
import { CacheKey, CacheTTL } from '@nestjs/cache-manager';


@Controller('user')
export class UserController {
    constructor(
        private readonly userService:UserService,
        private readonly commentService:CommentService,
        ){}
    @Get(':id')
    @CacheKey('custom_key')
    @CacheTTL(20*1000)
    async findOne(@Param("id") id:number){
        const userRes =  await this.userService.findOne(id)
        if (!userRes){
            return {"message": "user not found"}
        }
        return userRes
    }

    @Post()
    create(@Body() CreateUser: CreateUserDto){
        return this.userService.create(CreateUser);
    }

    @Put(":id")
    update(@Param("id") id: number, @Body() updateUserDto: updateUserDto){
        const user = this.userService.update(+id, updateUserDto);
        return user;
    }

    @Get(":id/comments")
    getUserComment(@Param("id") id:string){
        return this.commentService.findUserComments(id)
    }

}
