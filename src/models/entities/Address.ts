import { Column, Entity, JoinColumn, OneToOne } from "typeorm";
import { BaseClass } from "../BaseClass";
import { Register } from "./Register";
import { User } from "./User";

@Entity('tbl_Address')
export class Address extends BaseClass{

    @Column({type: 'integer'})
    number: number

    @Column({type: 'text'})
    street: string

    @Column({type: 'text'})
    postalCode: string

    @Column({type: 'text'})
    complement: string

    @Column({type: 'text'})
    neighborhood: string

    @Column({type: 'text'})
    city: string

    @Column({type: 'text'})
    state: string

    @Column({type: 'text'})
    country: string

    @OneToOne(() => Register, register => register.id)
    @JoinColumn({name: 'register_id'})
    register: Register
}