// filename: haiku.service.ts
import {Service} from 'typedi';
import {InjectRepository} from 'typeorm-typedi-extensions';
import {Haiku} from '../entity/haiku.entity';
import {Repository} from "typeorm";
import {PoetryService} from "./poetry.service";

@Service()
export class HaikuService extends PoetryService {

    public findAll(): Promise<Haiku[]> {
        return this.repository.find({ relations: ["author"] });
    }

    constructor(@InjectRepository(Haiku) private repository: Repository<Haiku>) {
        super();
    }
}
