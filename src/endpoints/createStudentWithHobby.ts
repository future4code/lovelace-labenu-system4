import { Request, Response } from 'express';
import insertStudentWithHobby from '../data/insertStudentWithHobby';

export default async function createStudentWithHobby(
    req:Request,
    res:Response

){
    const {student_id, hobbie_id} = req.body

    try{

        if(
            !student_id ||
            !hobbie_id
        ){
            res.status(400).send({
                message: 'É necessário passar o id do estudante e do hobbie!'
            })

            return
        }

        const id: string = Date.now() + Math.random().toString()

        await insertStudentWithHobby(
            id,
            student_id,
            hobbie_id
        )

        res
        .status(200).send({
            message: 'Aluno e Hobbie unidos com sucesso!!!',
            
            uniao: id,
            student_id:student_id,
            hobbie_id:hobbie_id
        })


    }catch (error: any) {
        res.status(400).send({
            message: error.message || error.sqlMessage
        })
    }

}