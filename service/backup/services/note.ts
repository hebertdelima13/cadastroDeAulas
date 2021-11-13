import { INote } from "../types/INote"
import * as db from '../libs/mysql'

const list = async () => {
    const result = await db.execute('select * from notes')
    return result.rowns
}

const get = async (id: string) => {
    if (!id) {
      throw new Error("Informe o campo id!")
    }
    
    const note = await db.execute('select * from notes where id=?', [id])
  
    if (!note) {
        throw new Error("Nenhuma anotação encontrada para o id informado!")
    }
  
    return note.rowns
}

const create = async (note: INote) => {
    if (!note.title) {
        throw new Error("Informe o campo title!")
    }
  
    if (!note.description) {
        throw new Error("Informe o campo description!")
    }

    await db.execute('insert into notes (title, description) values (?, ?)', [note.title, note.description])

    return true
  
}

const update = async (note: INote) => {
    if (!note.id) {
        throw new Error("Informe o campo id!")
    }
  
    const noteFound = await db.execute('select * from notes where id=?', [note.id])
  
    if (!noteFound) {
      throw new Error("Nenhuma anotação encontrada para o id informado!")
    }
  
    if (!note.title) {
        throw new Error("Informe o campo title!")
    }
  
    if (!note.description) {
        throw new Error("Informe o campo description!")
    }
  
    await db.execute('update notes set title=?, description=? where id=?', [note.title, note.description, note.id])
  
    return true
}

const remove = async (id: string) => {
    if (!id) {
        throw new Error("Informe o campo id!")
    }
  
    const note = await db.execute('select * from notes where id=?', [id])
    if (!note) {
        throw new Error("Nenhuma anotação encontrada para o id informado!")
    }
  
    await db.execute('delete from notes where id=?', [id])
  
    return true
}

export {
    list,
    get,
    create,
    update,
    remove
}
