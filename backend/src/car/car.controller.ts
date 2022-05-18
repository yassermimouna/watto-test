/* eslint-disable prettier/prettier */
import { Body ,Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Car } from 'src/models/car.interface'; 
import { DeleteResult, UpdateResult } from 'typeorm';
import { CarService } from './car.service';

@Controller('car')
export class CarController{

constructor(private carService: CarService){}

    @Post()
    create(@Body() car : Car): Observable<Car>{
       return this.carService.CreateCar(car);
    }

    @Get()
    retrieveAllcars():Observable<Car[]>{
       return this.carService.retrieveAllCars();
    }

    @Get(':id')
    retrieveOneCar(@Param('id') id: number):Observable<Car>{
       return this.carService.retrieveOneCar(id);
    }

    @Delete(':id')
    deleteCar( @Param('id') id: number):Observable<DeleteResult>{
       return this.carService.deleteCar(id);
    }

    @Put(':id')
    update(@Param('id') id : number , @Body() car: Car): Observable<UpdateResult>{
        return this.carService.updateCar(id,car);
    }
}