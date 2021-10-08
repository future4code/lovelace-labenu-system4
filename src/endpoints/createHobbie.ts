import { Request, Response } from 'express';
import insertHobbie from '../data/insertHobbie';


export default async function createHobbie(
    req:Request,
    res:Response

){
    const {name} = req.body

    try {

        if(
            !name
        ){
            res.status(400).send({
                message: 'Preencha o campo name com o seu hobbie favorito :D'
            })

            return
        }

        const id: string = Date.now() + Math.random().toString()

        await insertHobbie(
            id,
            name
        )
        
        res
        .status(200).send({
            message: 'Hobbie craiado com Sucesso!!!',
            id,
            nome:name
        })


        }catch (error: any) {
            res.status(400).send({
                message: error.message || error.sqlMessage
            })
        
        }

    }