import { Entity, Column, PrimaryGeneratedColumn, Unique } from "typeorm";

@Entity()
export class User
{

  @PrimaryGeneratedColumn()
  id:number;

  @Column({length:100})
  name:string;

  @Column({length:100})
  username:string;

  @Column({length:100})
  password:string;

  @Column({length:100, unique:true})
  email:string;

}