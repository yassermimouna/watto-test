/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from 'src/entities/user.entity';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtGuard } from './guard/jwt.guard';
import { JwtStrategy } from './guard/jwt.strategy';

@Module({
    imports : [
        JwtModule.registerAsync({
            useFactory: () => ({
                secret: process.env.JWT_SECRET,
                signOptions: { expiresIn: '3600s'}
            })
    }),
        TypeOrmModule.forFeature([UserEntity])
         ],
    providers: [AuthService,JwtGuard,JwtStrategy],
    controllers: [AuthController]
})
export class AuthModule{
    
}
