import { Factory, Seeder } from 'typeorm-seeding'
import { Connection } from 'typeorm'
import {Haiku} from "../entity/haiku.entity";
import {Limerick} from "../entity/limerick.entity";

export default class CreatePoems implements Seeder {
    public async run(factory: Factory, connection: Connection): Promise<any> {
        await factory(Haiku)().createMany(3)
        await factory(Limerick)().createMany(3)
    }
}
