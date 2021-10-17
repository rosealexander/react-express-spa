import * as Faker from "faker"
import {define, factory} from 'typeorm-seeding'
import { Limerick } from '../entity/limerick.entity'
import {User} from "../entity/user.entity";

define(Limerick, (faker: typeof Faker) => {
    const title = faker.random.words(1)
    const firstLine = faker.random.words(10)
    const secondLine = faker.random.words(10)
    const thirdLine = faker.random.words(5)
    const fourthLine = faker.random.words(5)
    const fifthLine = faker.random.words(10)

    const limerick = new Limerick()
    limerick.title = title;
    limerick.firstLine = firstLine;
    limerick.secondLine = secondLine;
    limerick.thirdLine = thirdLine;
    limerick.fourthLine = fourthLine;
    limerick.fifthLine = fifthLine;

    limerick.user = factory(User)() as any

    return limerick
})
