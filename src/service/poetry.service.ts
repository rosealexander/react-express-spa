// filename: poetry.service.ts
export abstract class PoetryService {
    public abstract find(id: number): Promise<any>
    public abstract findAll(): Promise<any[]>
    public abstract removeAll(): Promise<any[]>
    public abstract generate(): Promise<any>
}
