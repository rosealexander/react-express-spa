// filename: author.service.ts
import {InjectRepository} from 'typeorm-typedi-extensions';
import {Inject, Service} from 'typedi';
import {Author} from '../entity/author.entity';
import {PoetryService} from "./poetry.service";
import {Repository} from "typeorm";
import {AuthorFactory} from "../factories/author.factory";


@Service()
export class AuthorService extends PoetryService {

    public find(id: number): Promise<Author> {
        return this.repository.findOne(id);
    }

    public findAll(): Promise<Author[]> {
        return this.repository.find();
    }

    public async removeAll(): Promise<Author[]> {
        const list = await this.repository.find()
        return this.repository.remove(list);
    }

    public generate(): Promise<Author> {
        return this.authorFactory.run()
    }

    constructor(
        @InjectRepository(Author) private repository: Repository<Author>,
        @Inject() private authorFactory: AuthorFactory
    ) {super()}
}
