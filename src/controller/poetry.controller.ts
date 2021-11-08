// filename: poetry.controller.ts
import {Request, Response} from "express";
import {PoemViewModel} from "../ViewModel/PoemViewModel";
import {PoetryService} from "../service/poetry.service";
import {Container} from "typedi";


export class PoetryController {

    static all = async (req: Request, res: Response) => {
        try {
            const poemService = Container.get(PoetryService)
            const poetry = await poemService.findAll()
            const poemArray = poetry.map( poem => {
                // @ts-ignore
                const {title, author, firstLine, secondLine, thirdLine, fourthLine, fifthLine} = poem
                const {name} = author
                const content = [firstLine, secondLine, thirdLine, fourthLine, fifthLine]
                return new PoemViewModel(name, content, title)
            })
            res.send(poemArray);
        }
        catch (error) {
            console.log(error)
            res.status(404).end();
        }
    }

    static clear = async (req: Request, res: Response) => {
        try {
            const poetryService = Container.get(PoetryService)
            await poetryService.removeAll()
            res.status(200).end()
        }
        catch (error) {
            console.log(error)
            res.status(500).end()
        }
    }

    static generate = async (req: Request, res: Response) => {
        const {authorId, poemType} = req.body
        try {
            const poetryService = Container.get(PoetryService)
            if (poemType === 'haiku') {
                const generatedHaiku = await poetryService.generateHaiku(authorId)
                const {title, author, firstLine, secondLine, thirdLine} = generatedHaiku
                const content = [firstLine, secondLine, thirdLine]
                res.status(201).send(new PoemViewModel(author.name, content, title));
            }
            else if (poemType === 'limerick') {
                const generatedLimerick = await poetryService.generateLimerick(authorId)
                const {title, author, firstLine, secondLine, thirdLine, fourthLine, fifthLine} = generatedLimerick
                const content = [firstLine, secondLine, thirdLine, fourthLine, fifthLine]
                res.status(201).send(new PoemViewModel(author.name, content, title));
            }
            else {
                res.status(400).end()
            }
        }
        catch (error) {
            console.log(error)
            res.status(500).end()
        }
    }
}
