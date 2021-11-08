// filename: PoetryVm.ts
import {PoemVm} from "./PoemVm";

export class PoetryVm {
    poetry: PoemVm[];

    constructor(collection: PoemVm[]) {
        this.poetry = collection;
    }
}
