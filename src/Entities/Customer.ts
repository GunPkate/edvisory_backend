import { Entity,Column,PrimaryGeneratedColumn, BaseEntity, OneToOne } from "typeorm";
import { Note } from "./Note";
import { History } from "./History";

@Entity({name: "customer"})
export class Customer extends BaseEntity{
    @PrimaryGeneratedColumn("increment")
    @OneToOne(()=>Note)

    customer_id!: number;

    @Column({type: 'varchar',length:50})
    firstName!: string;

    @Column({type: 'varchar',length:50})
    lastName!: string;

    @Column({type: 'varchar',length:50,unique:true})
    email!: string;

    @Column({type: 'varchar',length:50})
    password!: string;
}