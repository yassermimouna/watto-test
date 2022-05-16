/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common' ;
import { InjectRepository } from '@nestjs/typeorm';
import * as bcryptjs from 'bcryptjs';
import { from, map, Observable, switchMap } from 'rxjs';
import { UserEntity } from 'src/entities/user.entity';
import { User } from 'src/models/user.interface';
import { Repository } from 'typeorm';

@Injectable()
export class AuthService {
    
constructor(@InjectRepository(UserEntity) private readonly userRepository: Repository<UserEntity>){}
    hashPassword(password: string): Observable<string> {
       return from(bcryptjs.hash(password,12));
    }

    registerUser(user: User): Observable<User>{
        const { email , password } = user;

        return this.hashPassword(password).pipe(
            switchMap((hashedPassword: string) => {
                return from(this.userRepository.save({
                    email,
                    password : hashedPassword
                })).pipe(
                    map((user : User) => {
                        delete user.password;
                        return user;
                    })
                );
            }),
        );
    }
}
