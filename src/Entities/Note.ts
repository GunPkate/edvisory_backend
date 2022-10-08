import { Customer } from '../Entities/Customer';
import { Entity,Column,PrimaryGeneratedColumn, BaseEntity, OneToOne, JoinColumn, OneToMany } from "typeorm";
import { Category } from './Category';

@Entity({name: "note"})
export class Note extends BaseEntity{
    @PrimaryGeneratedColumn("increment")
    id!: number;
    
    @Column({type: 'int'})
    @OneToOne(()=>Customer)
    customer_id!: number;
    
    @Column({type: 'varchar',length:500})
    @OneToOne(()=>Category)
    title!: string;
    
    @Column({type: 'varchar',length:500})
    content!: string;


}