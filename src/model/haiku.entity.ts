import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";
import {Poem} from "./poem.entity";

@Entity()
export class Haiku extends Poem {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstLine: string;

    @Column()
    secondLine: string;

    @Column()
    thirdLine: string;

}
