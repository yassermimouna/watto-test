/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { CarEntity } from 'src/entities/car.entity';
import { Car } from 'src/models/car.interface';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';

@Injectable()
export class CarService {

    constructor(
        @InjectRepository(CarEntity)
        private readonly carPostRepository: Repository<CarEntity>
    ){}

    CreateCar(carPost : Car ): Observable<Car> {
        return from(this.carPostRepository.save(carPost));
    }

    retrieveAllCars(): Observable<Car[]>{
        return from(this.carPostRepository.find());
    }

    deleteCar(id : number): Observable<DeleteResult>{
        return from(this.carPostRepository.delete(id));
    }

    updateCar(id:number, car: Car): Observable<UpdateResult>{
        return from(this.carPostRepository.update(id,car));
    }
}
