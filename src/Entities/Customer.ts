import { Entity,Column,PrimaryGeneratedColumn, BaseEntity, OneToOne } from "typeorm";
import { Note } from "../Entities/Note";
import { History } from "../Entities/History";

@Entity({name: "customer"})
export class Customer extends BaseEntity{
    @PrimaryGeneratedColumn("increment")
    id!: number;

    @Column({type: 'varchar',length:50})
    firstName!: string;

    @Column({type: 'varchar',length:50})
    lastName!: string;

    @Column({type: 'varchar',length:50,unique:true})
    email!: string;

    @Column({type: 'varchar',length:50})
    password!: string;

    @OneToOne(()=>Note,note=>note.customer)
    note!: Note
}