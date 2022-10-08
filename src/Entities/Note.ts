import { Customer } from '../Entities/Customer';
import { Entity,Column,PrimaryGeneratedColumn, BaseEntity, OneToOne, JoinColumn, OneToMany } from "typeorm";
import { Category } from './Category';

@Entity({name: "note"})
export class Note extends BaseEntity{
    @PrimaryGeneratedColumn("increment")
    id!: number;
    
    @OneToOne(()=>Customer)
    customer_id!: number;
    
    @Column({type: 'varchar',length:500})
    // @OneToMany(()=>Category)
    title!: string;
    
    @Column({type: 'varchar',length:500})
    content!: string;


}