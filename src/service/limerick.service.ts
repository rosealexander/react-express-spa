// filename: limerick.service.ts
import {Service} from 'typedi';
import {InjectRepository} from 'typeorm-typedi-extensions';
import {Limerick} from '../entity/limerick.entity';
import {Repository} from "typeorm";
import {PoetryService} from "./poetry.service";

@Service()
export class LimerickService extends PoetryService{

    public findAll(): Promise<Limerick[]> {
        return this.repository.find({ relations: ["author"] });
    }

    constructor(@InjectRepository(Limerick) private repository: Repository<Limerick>) {
        super();
    }
}
