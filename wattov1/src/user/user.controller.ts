/* eslint-disable prettier/prettier */
import { Body ,Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { Observable } from 'rxjs';
import { User } from 'src/models/user.interface';
import { DeleteResult } from 'typeorm';
import { UserService } from './user.service';

@Controller('user')
export class UserController{

constructor(private userService: UserService){}

    @Post()
    create(@Body() user : User): Observable<User>{
       return this.userService.CreateUser(user);
    }

    @Get()
    retrieveAllUsers():Observable<User[]>{
       return this.userService.retrieveAllUsers();
    }

    @Delete(':id')
    deleteUser( @Param('id') id: number):Observable<DeleteResult>{
       return this.userService.deleteUser(id);
    }
}