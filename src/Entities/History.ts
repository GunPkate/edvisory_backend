import { Entity,Column,PrimaryGeneratedColumn, BaseEntity, OneToOne, JoinColumn } from "typeorm";
import { Customer } from "../Entities/Customer";
import { Note } from "../Entities/Note";

@Entity({name: "history"})
export class History extends BaseEntity{

    @PrimaryGeneratedColumn("increment")
    id!: number;    
    @OneToOne(()=>Note,note=>note.history,{onDelete: "CASCADE"})
    @JoinColumn()
    note!:Note


    // @Column({type: 'int'})
    // @OneToOne(()=>Note)
    // note_id!: number;

    @Column({type: 'varchar'})
    date!: string;


}