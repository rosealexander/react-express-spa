// filename: haiku.service.ts
import {Inject, Service} from 'typedi';
import {InjectRepository} from 'typeorm-typedi-extensions';
import {Haiku} from '../model/haiku.entity';
import {Repository} from "typeorm";
import {PoemService} from "./poem.service";
import {HaikuFactory} from "../factories/haiku.factory";


@Service()
export class HaikuService extends PoemService {

    public find(id: number): Promise<Haiku> {
        return this.repository.findOne(id);
    }

    public findAll(): Promise<Haiku[]> {
        return this.repository.find({ relations: ["author"], take: 30, order: {created_at: "DESC"} });
    }

    public async removeAll(): Promise<Haiku[]> {
        const list = await this.repository.find()
        return this.repository.remove(list);
    }

    public generate(): Promise<Haiku> {
        return this.haikuFactory.run()
    }

    public save(haiku: Haiku): Promise<Haiku> {
        return this.repository.save(haiku)
    }

    constructor(
        @InjectRepository(Haiku) private repository: Repository<Haiku>,
        @Inject() private haikuFactory: HaikuFactory
    ){super()}
}
