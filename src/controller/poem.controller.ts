import {Request, Response} from "express";
import {PoemVm} from "../ViewModel/PoemVm";
import {PoetryVm} from "../ViewModel/PoetryVm";
import {PoemService} from "../service/poem.service";
import {Container} from "typedi";


export class PoemController {

    static all = async (req: Request, res: Response) => {

        const poetryService = Container.get(PoemService)
        const poetry = await poetryService.findAll()

        const poetryVm = new PoetryVm(
            poetry.map( poem => {
                // @ts-ignore
                const {title, author, firstLine, secondLine, thirdLine, fourthLine, fifthLine} = poem
                const {name} = author
                const content = [firstLine, secondLine, thirdLine, fourthLine, fifthLine]
                return new PoemVm(title, name, content)
            })
        )

        res.send(poetryVm);
    };
}
