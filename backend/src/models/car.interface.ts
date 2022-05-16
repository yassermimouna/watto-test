/* eslint-disable prettier/prettier */
import { User } from "./user.interface";

export interface Car{
    id?: number;
    brand?: string;
    price?: number;
    user? : User;
}