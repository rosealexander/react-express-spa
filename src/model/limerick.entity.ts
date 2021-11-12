import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";
import {Poem} from "./poem.entity";

@Entity()
export class Limerick extends Poem {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstLine: string;

    @Column()
    secondLine: string;

    @Column()
    thirdLine: string;

    @Column()
    fourthLine: string;

    @Column()
    fifthLine: string;

}
