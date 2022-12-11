import { Column, Entity, JoinColumn, OneToOne } from "typeorm";
import { BaseClass } from "../BaseClass";
import { Address } from "./Address";
import { User } from "./User";

@Entity('tbl_Register')
export class Register extends BaseClass{

    @Column({type: 'timestamp', nullable: true})
    dateBorn: Date

    @Column({type: 'text', nullable: true})
    sex: string

    @Column({type: 'text', nullable: true})
    maritalStatus: string

    @Column({type: 'boolean', nullable: true})
    kids: boolean

    @Column({type: 'integer', nullable: true})
    quantityKids: number

    @Column({type: 'text', nullable: true})
    spouse: string

    @Column({type: 'boolean', nullable: true})
    ownResidence: boolean

    @Column({type: 'integer', nullable: true})
    yearsResidence: number

    @Column({type: 'text', nullable: true})
    liveWith: string

    @Column({type: 'boolean', nullable: true})
    immigrant: boolean

    @Column({type: 'text', nullable: true})
    passport: string

    @Column({type: 'integer', nullable: true})
    yearsImmigrant: number

    @Column({type: 'boolean', nullable: true})
    hasDocuments: boolean

    @Column({type: 'boolean', nullable: true})
    NIF: boolean

    @Column({type: 'boolean', nullable: true})
    NISS: boolean

    @Column({type: 'boolean', nullable: true})
    UTENTE: boolean

    @Column({type: 'boolean', nullable: true})
    VISA: boolean

    @Column({type: 'timestamp', nullable: true})
    dateStartCompany: Date

    @Column({type: 'boolean', nullable: true})
    partner: boolean

    @Column({type: 'integer', nullable: true})
    quantityPartners: number        
    
    @Column({type: 'text', nullable: true})
    userId: string

    @Column({type: 'text', nullable: true})
    companyId: string
}