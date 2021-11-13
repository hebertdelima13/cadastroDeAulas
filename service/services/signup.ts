import * as db from '../libs/mysql'
import { ISignup } from "../types/ISignup"

const register = async (signup: ISignup) => {

    if (!signup.name) {
        throw new Error("Informe o campo nome!")
    }

    if (!signup.email) {
        throw new Error("Informe o campo email!")
    }
  
    if (!signup.password) {
        throw new Error("Informe o campo senha!")
    }

    await db.execute('insert into users (name, email, password) values (?, ?, ?)', [signup.name, signup.email, signup.password])

    return ("Usuário criado com sucesso!")
  
}

export {
    register
}