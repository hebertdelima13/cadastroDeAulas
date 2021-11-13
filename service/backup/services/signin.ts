import * as db from '../libs/mysql'
import { ISignin } from "../types/ISignin"

const login = async (signin: ISignin) => {
    if (!signin.email) {
        throw new Error("Informe o campo email!")
    }
  
    if (!signin.password) {
        throw new Error("Informe o campo senha!")
    }

    //await db.execute('insert into notes (title, description) values (?, ?)', [note.title, note.description])

    return true
  
}

export {
    login
}