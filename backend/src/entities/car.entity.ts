/* eslint-disable prettier/prettier */
import { Column , Entity , ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { UserEntity } from './user.entity';

@Entity('car')
export class CarEntity{  
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    brand: string;

    @Column()
    price: number;

    @ManyToOne(()=> UserEntity,(UserEntity) => UserEntity.id)
    user : UserEntity;

}