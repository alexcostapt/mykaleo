import { text } from "stream/consumers";
import { Column, CreateDateColumn, DeleteDateColumn, PrimaryGeneratedColumn, Timestamp, UpdateDateColumn } from "typeorm";


export class BaseClass{
    @PrimaryGeneratedColumn('uuid')
    id: string
    
    @Column({type: 'integer', nullable: true})
    userLastUpdateId?: number    

    @Column({type: 'boolean', default: true})
    active: boolean

    @CreateDateColumn({type: 'timestamp', default: () => "CURRENT_TIMESTAMP" })
    createdAt: Date;
    // @Column()
    // createdAt: Date;

    @UpdateDateColumn({type: 'timestamp', nullable: true })
    updatedAt?: Date;

    @DeleteDateColumn({type: 'timestamp', nullable: true })
    deletedAt?: Date;
}