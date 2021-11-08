// filename: author.factory.ts
import * as faker from "faker"
import {Author} from '../entity/author.entity'
import {Service} from "typedi";
import {InjectRepository} from "typeorm-typedi-extensions";
import {Repository} from "typeorm";
import {PoetryFactory} from "./poetry.factory";


@Service()
export class AuthorFactory extends PoetryFactory {
    public run(): Promise<Author> {
        const firstName = faker.name.firstName()
        const lastName = faker.name.lastName()

        const author = this.repository.create()
        author.name = `${firstName} ${lastName}`

        return this.repository.save(author)
    }
    constructor(@InjectRepository(Author) private repository: Repository<Author>){super()}
}
