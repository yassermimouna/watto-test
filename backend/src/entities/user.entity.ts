/* eslint-disable prettier/prettier */
import { Column , Entity , OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { CarEntity } from './car.entity';
import { Role } from './role.enum';

@Entity('user')
export class UserEntity{  
    @PrimaryGeneratedColumn()
    id: number;

    @Column({unique : true})
    email: string;

    @Column({ select : false })
    password: string;
    
    @Column({ type: 'enum' , enum : Role, default: Role.USER})
    role: Role;

    @OneToMany(()=> CarEntity, (CarEntity)=> CarEntity.user )
    cars: CarEntity[];
}