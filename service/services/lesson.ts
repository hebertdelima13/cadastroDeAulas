import { ILesson } from "../types/ILesson"
import * as db from '../libs/mysql'

const list = async () => {
    const result = await db.execute('select * from lessons')
    return result.rowns
}

const get = async (id?: string) => {
    if (!id) {
      throw new Error("Informe o campo id!")
    }
    
    const lesson = await db.execute('select * from lessons where id=?', [id])
  
    if (!lesson) {
        throw new Error("Nenhuma aula encontrada para o id informado!")
    }
  
    return lesson.rowns
}

const create = async (lesson: ILesson) => {
    if (!lesson.title) {
        throw new Error("Informe o campo title!")
    }
  
    if (!lesson.description) {
        throw new Error("Informe o campo description!")
    }

    await db.execute('insert into lessons (title, description) values (?, ?)', [lesson.title, lesson.description])

    return true
  
}

const update = async (lesson: ILesson) => {
    if (!lesson.id) {
        throw new Error("Informe o campo id!")
    }
  
    const lessonFound = await db.execute('select * from lessons where id=?', [lesson.id])
  
    if (!lessonFound) {
      throw new Error("Nenhuma aula encontrada para o id informado!")
    }
  
    if (!lesson.title) {
        throw new Error("Informe o campo title!")
    }
  
    if (!lesson.description) {
        throw new Error("Informe o campo description!")
    }
  
    await db.execute('update lessons set title=?, description=? where id=?', [lesson.title, lesson.description, lesson.id])
  
    return true
}

const remove = async (id?: string) => {
    if (!id) {
        throw new Error("Informe o campo id!")
    }
  
    const lesson = await db.execute('select * from lessons where id=?', [id])
    if (!lesson) {
        throw new Error("Nenhuma aula encontrada para o id informado!")
    }
  
    await db.execute('delete from lessons where id=?', [id])
  
    return true
}

export {
    list,
    get,
    create,
    update,
    remove
}
