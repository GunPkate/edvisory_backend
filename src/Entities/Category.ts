import { Entity,Column,PrimaryGeneratedColumn, BaseEntity } from "typeorm";

@Entity({name: "note"})
export class Category extends BaseEntity{
    @PrimaryGeneratedColumn("increment")
    id!: number;
    @Column({type: 'varchar',length:50})
    titlename!: string;



}