// filename: poem.service.ts
import {Inject, Service} from 'typedi';
import {Limerick} from '../entity/limerick.entity';
import {Poem} from "../entity/poem.entity";
import {LimerickService} from "./limerick.service";
import {HaikuService} from "./haiku.service";
import {Haiku} from "../entity/haiku.entity";
import {PoetryService} from "./poetry.service";


@Service()
export class PoemService extends PoetryService{

    public async findAll(): Promise<Poem[]> {
        const haikus: Haiku[] = await this.haikuService.findAll()
        const limericks: Limerick[] = await this.limerickService.findAll()
        return [...haikus, ...limericks];
    }

    constructor(@Inject() private haikuService: HaikuService, @Inject() private limerickService: LimerickService) {
        super();
    }
}
