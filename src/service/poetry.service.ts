// filename: poetry.service.ts

export abstract class PoetryService {
    public abstract findAll(): Promise<any[]>
}
