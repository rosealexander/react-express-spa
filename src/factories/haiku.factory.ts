// filename: haiku.factory.ts
import * as faker from "faker"
import { Haiku } from '../entity/haiku.entity'
import {Service} from "typedi";
import {PoemFactory} from "./poem.factory";
import {InjectRepository} from "typeorm-typedi-extensions";
import {Repository} from "typeorm";


@Service()
export class HaikuFactory extends PoemFactory {
    public run(): Promise<Haiku> {
        const title = faker.random.words(2)
        const firstLine = faker.random.words(3)
        const secondLine = faker.random.words(5)
        const thirdLine = faker.random.words(3)

        const haiku = this.repository.create()
        haiku.title = title;
        haiku.firstLine = firstLine;
        haiku.secondLine = secondLine;
        haiku.thirdLine = thirdLine;

        return this.repository.save(haiku)
    }
    constructor(@InjectRepository(Haiku) private repository: Repository<Haiku>){super()}
}
