/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminEntity } from 'src/entities/admin.entity';
import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';

@Module({
  imports : [
    TypeOrmModule.forFeature([AdminEntity])
  ],
  providers: [AdminService],
  controllers: [AdminController]
})
export class AdminModule {}
