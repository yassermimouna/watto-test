/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from 'src/entities/user.entity';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
    imports : [
        TypeOrmModule.forFeature([UserEntity])
         ],
    providers: [AuthService],
    controllers: [AuthController]
})
export class AuthModule{
    
}
