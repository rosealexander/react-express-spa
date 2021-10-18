import * as Faker from "faker"
import {define, factory} from 'typeorm-seeding'
import { Haiku } from '../entity/haiku.entity'
import {Author} from "../entity/author.entity";

define(Haiku, (faker: typeof Faker) => {
    const title = faker.random.words(2)
    const firstLine = faker.random.words(3)
    const secondLine = faker.random.words(5)
    const thirdLine = faker.random.words(3)

    const haiku = new Haiku()
    haiku.title = title;
    haiku.firstLine = firstLine;
    haiku.secondLine = secondLine;
    haiku.thirdLine = thirdLine;

    haiku.author = factory(Author)() as any

    return haiku
})
