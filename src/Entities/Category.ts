import { Entity,Column,PrimaryGeneratedColumn, BaseEntity, OneToOne, ManyToOne, JoinColumn } from "typeorm";
import { Note } from "./Note";

@Entity({name: "category"})
export class Category extends BaseEntity{
    @PrimaryGeneratedColumn("increment")
    id!: number;   
    @OneToOne(()=>Note,note=>note.category,{onDelete: "CASCADE"})
    @JoinColumn()
    note!:Note
    
    @Column({type: 'varchar',length:50})
    title!: string;
}