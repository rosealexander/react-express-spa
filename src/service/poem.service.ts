// filename: poem.service.ts

import {Poem} from "../model/poem.entity";

export abstract class PoemService {
    public abstract find(id: number): Promise<Poem>
    public abstract findAll(): Promise<Poem[]>
    public abstract removeAll(): Promise<Poem[]>
    public abstract generate(): Promise<Poem>
    public abstract save(poem: Poem): Promise<Poem>
}
