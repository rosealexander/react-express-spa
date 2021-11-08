// filename: limerick.service.ts
import {Inject, Service} from 'typedi';
import {InjectRepository} from 'typeorm-typedi-extensions';
import {Repository} from "typeorm";
import {PoetryService} from "./poetry.service";
import {Limerick} from "../entity/limerick.entity";
import {LimerickFactory} from "../factories/limerick.factory";


@Service()
export class LimerickService extends PoetryService{

    public find(id: number): Promise<Limerick> {
        return this.repository.findOne(id);
    }

    public findAll(): Promise<Limerick[]> {
        return this.repository.find({ relations: ["author"] });
    }

    public async removeAll(): Promise<Limerick[]> {
        const list = await this.repository.find()
        return this.repository.remove(list);
    }

    public generate(): Promise<Limerick> {
        return this.limerickFactory.run()
    }

    public save(limerick: Limerick): Promise<Limerick> {
        return this.repository.save(limerick)
    }

    constructor(
        @InjectRepository(Limerick) private repository: Repository<Limerick>,
        @Inject() private limerickFactory: LimerickFactory
    ){super()}
}
