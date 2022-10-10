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

    @Column({type: 'int'})
    category_id!: number;
    @OneToOne(()=>Category,category=>category.note,{onDelete: "CASCADE"})
    @JoinColumn()
    category!:Category[]
    
    @Column({type: 'int'})
    date_id!: number;
    @OneToOne(()=>History,history=>history.note,{onDelete: "CASCADE"})
    @JoinColumn()
    history!: History;


}