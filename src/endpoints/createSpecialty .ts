import { Request, Response } from 'express';
import insertSpecialty from '../data/insertSpecialty';


export default async function createSpecialty(
    req:Request,
    res:Response

){
    const {nome} = req.body

    try {

        if(
            !nome
        ){
            res.status(400).send({
                message: 'Preencha o campo nome com a sua especialidade especifica sendo elas: "React", "Redux", "CSS","Testes","Typescript", "Programação Orientada a Objetos"ou"Backend"'
            })

            return
        }

        const id: string = Date.now() + Math.random().toString()

        await insertSpecialty(
            id,
            nome
        )

        res
        .status(200).send({
            message: 'Especialidade criada com sucesso!!!',
            id,
            nome:nome

        })

        }catch (error: any) {
            res.status(400).send({
                message: error.message || error.sqlMessage
            })

        }
    }