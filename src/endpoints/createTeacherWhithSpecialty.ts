import { Request, Response } from 'express';
import insertTeacherWhithSpecialty from '../data/insertTeacherWhithSpecialty';

export default async function createTeacherWhithSpecialty(
    req:Request,
    res:Response
){
    const {teacher_id, especialidade_id} = req.body

    try {

        if(
            !teacher_id ||
            !especialidade_id
        ){
            res.status(400).send({
                message: 'É necessário passar o id do professor e da especialidade!'
            })

            return
        }

        const id: string = Date.now() + Math.random().toString()

        await insertTeacherWhithSpecialty(
            id,
            teacher_id,
            especialidade_id
        )
        res
        .status(200).send({
            message: 'Professor e especialidade unidos com sucesso!!!',
            
            uniao: id,
            tecaher_id: teacher_id,
            especialidade_id: especialidade_id
        })


    }catch (error: any) {
        res.status(400).send({
            message: error.message || error.sqlMessage
        })
    }

}