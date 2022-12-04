import { text } from "stream/consumers";
import { Column, PrimaryGeneratedColumn, Timestamp } from "typeorm";


export class BaseClass{
    @PrimaryGeneratedColumn({type: 'integer'})
    id: number
    
    @Column({type: 'integer', nullable: true})
    userLastUpdateId?: number    

    @Column({type: 'boolean', default: true})
    active: boolean

    @Column()
    createdAt: Date;

    @Column({ nullable: true })
    updatedAt?: Date;

    @Column({nullable: true })
    deletedAt?: Date;
}