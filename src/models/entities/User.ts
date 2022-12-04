import { Column, Entity, JoinColumn, ManyToOne, OneToOne } from "typeorm";
import { BaseClass } from "../BaseClass";
import { Company } from "./Company";
import { Profile } from "./Profile";


@Entity('tbl_user')
export class User extends BaseClass{
    
    @Column({type: 'text'})
    name: string

    @Column({type: 'integer'})
    nif: number

    @Column({type: 'text'})
    email: string

    @Column({type: 'text'})
    password: string

    @ManyToOne(() => Company, company => company.id)
    @JoinColumn({name: 'company_id'})
    company: Company

    @OneToOne(() => Profile, profile => profile.id)
    @JoinColumn({name: 'profile_id'})
    profile: Profile
}