// filename: PoemViewModel.ts
export class PoemViewModel {
    public author: string
    public content: string[]
    public title: string

    constructor(author: string, content: string[], title: string) {
        this.author = author;
        this.content = content;
        this.title = title;
    }
}
