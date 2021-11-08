// filename: limerick.factory.ts
import * as faker from "faker"
import { Limerick } from '../entity/limerick.entity'
import {Service} from "typedi";
import {PoetryFactory} from "./poetry.factory";
import {InjectRepository} from "typeorm-typedi-extensions";
import {Repository} from "typeorm";


@Service()
export class LimerickFactory extends PoetryFactory {
    public run(): Promise<Limerick> {
        const title = faker.random.words(2)
        const firstLine = faker.random.words(5)
        const secondLine = faker.random.words(5)
        const thirdLine = faker.random.words(3)
        const fourthLine = faker.random.words(3)
        const fifthLine = faker.random.words(5)

        const limerick = this.repository.create()
        limerick.title = title;
        limerick.firstLine = firstLine;
        limerick.secondLine = secondLine;
        limerick.thirdLine = thirdLine;
        limerick.fourthLine = fourthLine;
        limerick.fifthLine = fifthLine;

        return this.repository.save(limerick)
    }
    constructor(@InjectRepository(Limerick) private repository: Repository<Limerick>){super()}
}

