import { Column, Entity } from "typeorm";
import { BaseClass } from "../BaseClass";


@Entity('tbl_UserProfile')
export class Profile extends BaseClass {

    @Column({type: 'text', nullable: true})
    profile: string

    @Column({type: 'boolean', default: false})
    edit: boolean

    @Column({type: 'boolean', default: false})
    create: boolean

    @Column({type: 'boolean', default: false})
    read: boolean
    
    @Column({type: 'boolean', default: false})
    delete: boolean
}