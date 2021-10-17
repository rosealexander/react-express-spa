import * as Faker from "faker"
import { define } from 'typeorm-seeding'
import { User } from '../entity/user.entity'

define(User, (faker: typeof Faker) => {
    const title = faker.name.title()
    const firstName = faker.name.firstName()
    const lastName = faker.name.lastName()

    const user = new User()
    user.name = `${title} ${firstName} ${lastName}`;

    return user
})
