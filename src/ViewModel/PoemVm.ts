// filename: PoemVm.ts
export class PoemVm {
    public title: string
    public author: string
    public content: string[]

    constructor(title: string, author: string, content: string[]) {
        this.title = title;
        this.author = author;
        this.content = content;
    }
}
