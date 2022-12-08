import { Column, Entity } from "typeorm";
import { BaseClass } from "../BaseClass";


@Entity('tbl_UserProfile')
export class Profile extends BaseClass {

    @Column({type: 'text', nullable: true})
    profile: string

    @Column({type: 'boolean', default: false})
    prf_edit: boolean

    @Column({type: 'boolean', default: false})
    prf_create: boolean

    @Column({type: 'boolean', default: false})
    prf_read: boolean
    
    @Column({type: 'boolean', default: false})
    prf_delete: boolean
}