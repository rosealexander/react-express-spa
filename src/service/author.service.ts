// filename: author.service.ts
import {InjectRepository} from 'typeorm-typedi-extensions';
import {Service} from 'typedi';
import {Author} from '../model/author.entity';
import {Repository} from "typeorm";


@Service()
export class AuthorService {

    public create(name: string): Promise<Author> {
        const author = this.repository.create()
        author.name = name;
        return this.repository.save(author)
    }

    public find(id: number): Promise<Author> {
        return this.repository.findOne(id);
    }

    public findAll(): Promise<Author[]> {
        return this.repository.find({take: 30});
    }

    public async removeAll(): Promise<Author[]> {
        const list = await this.repository.find()
        return this.repository.remove(list);
    }

    constructor(@InjectRepository(Author) private repository: Repository<Author>,) {}
}
