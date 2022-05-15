/* eslint-disable prettier/prettier */
import { Body, Controller, Post } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Admin } from 'src/models/admin.interface';
import { AdminService } from './admin.service';

@Controller('admin')
export class AdminController{

    constructor(private adminService: AdminService){}

    @Post()
    createAdmin(@Body() admin : Admin): Observable<Admin>{
       return this.adminService.createAdmin(admin);
    }
}