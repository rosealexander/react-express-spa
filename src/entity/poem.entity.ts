import {Entity, PrimaryGeneratedColumn, Column, ManyToOne} from "typeorm";
import {Author} from "./author.entity";

@Entity()
export abstract class Poem {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @ManyToOne(() => Author, author => author.poems)
    author: Author;
}
