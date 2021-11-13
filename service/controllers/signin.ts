import { Request, Response } from 'express'
import * as signin from '../services/signin'
import { error } from '../libs/bindError'

const login = async (req: Request<any>, res: Response<any>) => {
    try {
        const email = req.body.email
        const password = req.body.password

        const signinCorrect = await signin.login({ email, password })
        return res.json(signinCorrect)
    } catch (err: any) {
        return error(res, err)
    }  
}

export {
    login
}