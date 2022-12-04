import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany } from "typeorm";
import { BaseClass } from "../BaseClass";
import { User } from "./User";

@Entity('tbl_company')
export class Company extends BaseClass{

    @Column({type: 'text'})
    name: string

    @Column({type: 'integer'})
    nif: number

    @Column({type: 'text'})
    email: string

    @OneToMany(() => User, user => user.id)
    @JoinColumn({name: 'user_id'})
    users: User[]
}