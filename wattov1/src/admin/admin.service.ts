/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { AdminEntity } from 'src/entities/admin.entity';
import { Admin } from 'src/models/admin.interface';
import { Repository } from 'typeorm';

@Injectable()
export class AdminService {

    constructor(
        @InjectRepository(AdminEntity)
        private readonly UserPostRepository: Repository<AdminEntity>
    ){}

    createAdmin(adminPost : Admin ): Observable<Admin> {
        return from(this.UserPostRepository.save(adminPost));
    }
}
