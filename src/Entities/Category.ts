import { Entity,Column,PrimaryGeneratedColumn, BaseEntity, OneToOne } from "typeorm";
import { Note } from "./Note";

@Entity({name: "note"})
export class Category extends BaseEntity{
    @PrimaryGeneratedColumn("increment")
    id!: number;
    @Column({type: 'varchar',length:50})
    @OneToOne(()=>Note)
    title!: string;



}