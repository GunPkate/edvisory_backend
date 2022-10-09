import { Entity,Column,PrimaryGeneratedColumn, BaseEntity, OneToOne } from "typeorm";
import { Customer } from "./Customer";
import { Note } from "./Note";

@Entity({name: "note"})
export class History extends BaseEntity{
    @PrimaryGeneratedColumn("increment")
    id!: number;

    @OneToOne(()=>Note,note=>note.history)
    note!:Note
    // @Column({type: 'int'})
    // @OneToOne(()=>Note)
    // note_id!: number;

    // @Column({type: 'date'})
    // date!: Date;


}