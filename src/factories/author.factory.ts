import * as Faker from "faker"
import { define } from 'typeorm-seeding'
import { Author } from '../entity/author.entity'

define(Author, (faker: typeof Faker) => {
    const firstName = faker.name.firstName()
    const lastName = faker.name.lastName()

    const user = new Author()
    user.name = `${firstName} ${lastName}`;

    return user
})
