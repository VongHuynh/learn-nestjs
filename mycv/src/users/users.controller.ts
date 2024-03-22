import {Controller, 
        Post, 
        Body, 
        Get, 
        Query, 
        Param, 
        Delete, 
        NotFoundException, 
        Patch ,
        UseGuards,
        Session
    } from '@nestjs/common';
import { createUserDto } from './dtos/create-user.dto';
import { UsersService } from './users.service';
import { UpdateUserDto } from './dtos/update-user.dto';
import { Serializer } from 'src/users/interceptors/serialize.interceptor';
import { UserDto } from './dtos/user.dto';
import { AuthService } from './auth.service';
import { CurrentUser } from './decorators/current-user.decorator';
import { User } from './user.entity';
import { AuthGuard } from 'src/guards/auth.guard';


@Serializer(UserDto)
@Controller('auth')
export class UsersController {
    constructor (
        private userService: UsersService,
        private authService: AuthService
    ){}

    // @Get('/whoami')
    // whoAmI(@Session() session: any) {
    //     return this.userService.findOne(session.userId);
    // }

    @Get('/whoami')
    @UseGuards(AuthGuard)
    whoAmI(@CurrentUser() user: User) {
        return user;
    }

    @Post('/signup')
    async createUser(@Body() body: createUserDto, @Session() session: any){
        const user = await this.authService.signUp(body.email, body.password)
        session.userId = user.id;
        return user;
    }

    @Post('/signin')
    async signIn(@Body() body: createUserDto, @Session() session: any) {
        const user = await this.authService.signIn(body.email, body.password);
        session.userId = user.id;
        return user; 
    }

    @Post('/signout')
    signOut(@Session() session: any) {
        session.userId = null;
    }


    @Get('/:id')
    async findUser(@Param('id') id: string){
        const user = await this.userService.findOne(parseInt(id));
        if ( !user ){
            throw new NotFoundException('user not found')
        }
        return user;
    }

    @Get()
    findAllUsers( @Query('email') email: string ){
        return this.userService.find(email);
    }

    @Delete('/:id')
    removeUser(@Param('id') id: string) {
        return this.userService.remove(parseInt(id))
    }

    @Patch('/:id')
    updateUser(@Param('id') id: string, @Body() body: UpdateUserDto){
        return this.userService.update(parseInt(id), body);
    }

    @Get('/colors/:color')
    setColor(@Param('color') color: string, @Session() session: any){
        session.color = color;
    }

    @Get('/colors')
    getColor(@Session() session: any){
        return session.color;
    }

}
