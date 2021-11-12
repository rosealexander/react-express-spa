// filename: author.controller.ts
import {Request, Response} from "express";
import {AuthorViewModel} from "../viewmodel/AuthorViewModel";
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


    static create = async (req: Request, res: Response) => {
        try {
            const {name} = req.body
            const authorService = Container.get(AuthorService)
            const newAuthor = await authorService.create(name)
            const authorViewModel = new AuthorViewModel(newAuthor.id, newAuthor.name)
            res.status(201).send(authorViewModel);
        }
        catch (error) {
            console.log(error)
            res.status(500).end()
        }
    }
}
