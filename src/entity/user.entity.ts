import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import {Poem} from "./poem.entity";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToMany(() => Poem, poem => poem.user)
    poems: Poem[];
}
