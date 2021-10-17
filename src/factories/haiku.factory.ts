import * as Faker from "faker"
import {define, factory} from 'typeorm-seeding'
import { Haiku } from '../entity/haiku.entity'
import {User} from "../entity/user.entity";

define(Haiku, (faker: typeof Faker) => {
    const title = faker.random.words(1)
    const firstLine = faker.random.words(5)
    const secondLine = faker.random.words(7)
    const thirdLine = faker.random.words(5)

    const haiku = new Haiku()
    haiku.title = title;
    haiku.firstLine = firstLine;
    haiku.secondLine = secondLine;
    haiku.thirdLine = thirdLine;

    haiku.user = factory(User)() as any

    return haiku
})
