import { Request, Response } from 'express'
import * as signup from '../services/signup'
import { error } from '../libs/bindError'


const register = async (req: Request<any>, res: Response<any>) => {
    try {
        const name = req.body.name
        const email = req.body.email
        const password = req.body.password

        const signupCorrect = await signup.register({ name, email, password })
        return res.json(signupCorrect)
    } catch (err: any) {
        return error(res, err)
    }  
}

export {
    register
}