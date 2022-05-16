/* eslint-disable prettier/prettier */

import { CarEntity } from "src/entities/car.entity";
import { Role } from "src/entities/role.enum";

export interface User{
    id?: number;
    email?: string;
    password?: string;
    cars?: CarEntity[];
    role?: Role;
}