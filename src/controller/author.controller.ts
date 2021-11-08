// filename: author.controller.ts
import {Request, Response} from "express";
import {AuthorViewModel} from "../ViewModel/AuthorViewModel";
import {AuthorService} from "../service/author.service";
import {Container} from "typedi";


export class AuthorController {

    static all = async (req: Request, res: Response) => {
        try {
            const authorService = Container.get(AuthorService)
            const authors = await authorService.findAll()
            const authorArray = authors.map( author => {
                const {id, name} = author
                return new AuthorViewModel(id, name)
            })
            res.send(authorArray);
        }
        catch (error) {
            res.status(404).end()
        }
    }


    static generate = async (req: Request, res: Response) => {
        try {
            const authorService = Container.get(AuthorService)
            const generatedAuthor = await authorService.generate()
            const authorViewModel = new AuthorViewModel(generatedAuthor.id, generatedAuthor.name)

            res.status(201).send(authorViewModel);
        }
        catch (error) {
            res.status(500).end()
        }
    }
}
