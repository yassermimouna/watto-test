/* eslint-disable prettier/prettier */
import { Column , Entity , PrimaryGeneratedColumn } from 'typeorm';

@Entity('car')
export class CarEntity{  
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    brand: string;

    @Column()
    price: number;
}