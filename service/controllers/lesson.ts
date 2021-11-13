import { Request, Response } from 'express'
import * as lesson from '../services/lesson'
import { error } from '../libs/bindError'

const list = async (req: Request<any>, res: Response<any>) => {
    try {
        const lessons = await lesson.list()
        return res.json(lessons)
    } catch (err: any) {
        return error(res, err)
    }
}

const get = async (req: Request<any>, res: Response<any>) => {
    try {
        const id = req.params.id
        if(!id) return res.status(400).json({ message: 'Informe o campo id!' })    

        const lessonFound = await lesson.get(id)
        res.json(lessonFound)
    } catch (err: any) {
        return error(res, err)
    }

}

const create = async (req: Request<any>, res: Response<any>) => {
    try {
        const title = req.body.title
        const description = req.body.description

        const lessonCreated = await lesson.create({ title, description })
        return res.json(lessonCreated)
    } catch (err: any) {
        return error(res, err)
    }  
}

const update = async (req: Request<any>, res: Response<any>) => {
    try {
        const id = req.params.id
        const title = req.body.title
        const description = req.body.description
        if (!id) {
            return res.status(400).json({ message: 'Informe o campo id!' })
        }

        const lessonUpdated = await lesson.update({ id, title, description })
        return res.json(lessonUpdated)
    } catch (err: any) {
        return error(res, err)
    }

}

const remove = async (req: Request<any>, res: Response<any>) => {
    try {
        const id = req.params.id

        if (!id) {
            return res.status(400).json({ message: 'Informe o campo id!' })
        }

        await lesson.remove(id)
        res.json({ success: true })

    } catch (err: any) {
        return error(res, err)
    }
}

export {
    list,
    get, 
    create,
    update, 
    remove
}