// filename: poetry.service.ts
import {Inject, Service} from 'typedi';
import {Limerick} from '../entity/limerick.entity';
import {Poem} from "../entity/poem.entity";
import {LimerickService} from "./limerick.service";
import {HaikuService} from "./haiku.service";
import {Haiku} from "../entity/haiku.entity";
import {AuthorService} from "./author.service";
import {Author} from "../entity/author.entity";


@Service()
export class PoetryService {

    public async findAll(): Promise<Poem[]> {
        const haikus: Haiku[] = await this.haikuService.findAll()
        const limericks: Limerick[] = await this.limerickService.findAll()
        return [...haikus, ...limericks];
    }

    public async removeAll(): Promise<(Haiku[] | Limerick[] | Author[])[]> {
        return Promise.all([
            await this.haikuService.removeAll(),
            await this.limerickService.removeAll(),
            await this.authorService.removeAll()
        ])
    }

    public async generateHaiku(authorId?: number): Promise<Haiku> {
        const generatedHaiku = await this.haikuService.generate()
        generatedHaiku.author = authorId ? await this.authorService.find(authorId) : await this.authorService.generate()
        return this.haikuService.save(generatedHaiku)
    }

    public async generateLimerick(authorId?: number): Promise<Limerick> {
        const generatedLimerick = await this.limerickService.generate()
        generatedLimerick.author = authorId ? await this.authorService.find(authorId) : await this.authorService.generate()
        return this.limerickService.save(generatedLimerick)
    }

    constructor(
        @Inject() private haikuService: HaikuService,
        @Inject() private limerickService: LimerickService,
        @Inject() private authorService: AuthorService
    ){}
}
