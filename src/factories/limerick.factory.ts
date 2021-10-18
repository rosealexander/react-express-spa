import * as Faker from "faker"
import {define, factory} from 'typeorm-seeding'
import { Limerick } from '../entity/limerick.entity'
import {Author} from "../entity/author.entity";

define(Limerick, (faker: typeof Faker) => {
    const title = faker.random.words(2)
    const firstLine = faker.random.words(5)
    const secondLine = faker.random.words(5)
    const thirdLine = faker.random.words(3)
    const fourthLine = faker.random.words(3)
    const fifthLine = faker.random.words(5)

    const limerick = new Limerick()
    limerick.title = title;
    limerick.firstLine = firstLine;
    limerick.secondLine = secondLine;
    limerick.thirdLine = thirdLine;
    limerick.fourthLine = fourthLine;
    limerick.fifthLine = fifthLine;

    limerick.author = factory(Author)() as any

    return limerick
})
