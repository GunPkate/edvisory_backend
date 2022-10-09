import { Entity,Column,PrimaryGeneratedColumn, BaseEntity, OneToOne, ManyToOne, JoinColumn } from "typeorm";
import { Note } from "./Note";

@Entity({name: "note"})
export class Category extends BaseEntity{
    @PrimaryGeneratedColumn("increment")
    id!: number;
   
    @ManyToOne(()=>Note,note=>note.category)
    @JoinColumn()
    note!:Note
    
    @Column({type: 'varchar',length:50})
    title!: string;
}