import { Customer } from '../Entities/Customer';
import { Entity,Column,PrimaryGeneratedColumn, BaseEntity, OneToOne, JoinColumn, OneToMany } from "typeorm";
import { Category } from './Category';
import { History } from './History';

@Entity({name: "note"})
export class Note extends BaseEntity{
    @PrimaryGeneratedColumn("increment")
    id!: number;
      
    // @Column({type: 'varchar',length:500})
    // @OneToOne(()=>Category)
    // title!: string;
    
    @Column({type: 'varchar',length:500})
    text!: string;

    // @Column({type: 'varchar',length:500})
    // date!: Date;

    @OneToOne(()=>Customer,customer => customer.note)
    @JoinColumn()
    customer!: Customer

    @OneToMany(()=>Category,category=>category.note)
    category!:Category[]
    
    @OneToMany(()=>History,history=>history.note)  
    history!: History;


}