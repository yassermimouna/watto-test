/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { CarEntity } from 'src/entities/car.entity';
import { CarService } from './car.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarController } from './car.controller';

@Module({
  imports : [
    TypeOrmModule.forFeature([CarEntity])
     ],
    providers: [CarService],
    controllers: [CarController],
})
export class CarModule {}
