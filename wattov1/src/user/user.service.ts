/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from,Observable } from 'rxjs';
import { UserEntity } from 'src/entities/user.entity';
import { User } from 'src/models/user.interface';
import { DeleteResult, Repository } from 'typeorm';


@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserEntity)
        private readonly UserPostRepository: Repository<UserEntity>
    ){}

    CreateUser(userPost : User ): Observable<User> {
        return from(this.UserPostRepository.save(userPost));
    }

    retrieveAllUsers(): Observable<User[]>{
        return from(this.UserPostRepository.find());
    }

    deleteUser(id : number): Observable<DeleteResult>{
        return from(this.UserPostRepository.delete(id));
    }
}
