// filename: poetry.controller.ts
import {Request, Response} from "express";
import {PoemViewModel} from "../viewmodel/PoemViewModel";
import {PoetryService} from "../service/poetry.service";
import {Container} from "typedi";


export class PoetryController {

    static all = async (req: Request, res: Response) => {
        try {
            const poemService = Container.get(PoetryService)
            const poems = await poemService.findAll()
            const poemArray = poems.map( poem => {
                // @ts-ignore
                const {title, author, firstLine, secondLine, thirdLine, fourthLine, fifthLine} = poem
                const content = [firstLine, secondLine, thirdLine, fourthLine, fifthLine]
                const name = author?.name || ""
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
            const poemService = Container.get(PoetryService)
            await poemService.removeAll()
            res.status(200).end()
        }
        catch (error) {
            console.log(error)
            res.status(500).end()
        }
    }

    static generateHaiku = async (req: Request, res: Response) => {
        try {
            const {authorId} = req.body
            const poetryService = Container.get(PoetryService)
            const generatedHaiku = await poetryService.generateHaiku(authorId)
            const {title, author, firstLine, secondLine, thirdLine} = generatedHaiku
            const content = [firstLine, secondLine, thirdLine]
            res.status(201).send(new PoemViewModel(author.name, content, title));
        }
        catch (error) {
            console.log(error)
            res.status(500).end()
        }
    }

    static generateLimerick = async (req: Request, res: Response) => {
        const {authorId} = req.body
        try {
            const poetryService = Container.get(PoetryService)
            const generatedLimerick = await poetryService.generateLimerick(authorId)
            const {title, author, firstLine, secondLine, thirdLine, fourthLine, fifthLine} = generatedLimerick
            const content = [firstLine, secondLine, thirdLine, fourthLine, fifthLine]
            res.status(201).send(new PoemViewModel(author.name, content, title));
        }
        catch (error) {
            console.log(error)
            res.status(500).end()
        }
    }
}
