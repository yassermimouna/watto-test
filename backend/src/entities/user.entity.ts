/* eslint-disable prettier/prettier */
import { Column , Entity , PrimaryGeneratedColumn } from 'typeorm';

@Entity('user')
export class UserEntity{  
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column({type: 'int', array: true, nullable: true })
    cars: number[];
}