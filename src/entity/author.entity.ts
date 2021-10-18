import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import {Poem} from "./poem.entity";

@Entity()
export class Author {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToMany(() => Poem, poem => poem.author)
    poems: Poem[];
}
