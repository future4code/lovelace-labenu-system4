import { Request, Response } from 'express';
import selectAgeStudentById from '../data/selectAgeStudentById';

export default async function getAgeStudentById(
    req:Request,
    res:Response

){
    try {

        const student = await selectAgeStudentById(req.params.id)

        if(!student){
            res.status(404).send({
                message:'Estudante não encontrado'
            })

        }
        // async function idade(data_nasc:Date, hoje:Date):Promise<any> {
        //     var diferencaAnos = hoje.getFullYear() - data_nasc.getFullYear();
        //     if ( new Date(hoje.getFullYear(), hoje.getMonth(), hoje.getDate()) < 
        //          new Date(hoje.getFullYear(), data_nasc.getMonth(), data_nasc.getDate()) )
        //         diferencaAnos--;
        // }

            res.status(200).send({
                message:'Sucesso!!',
                student: student.id,
                name: student.name,
                age: student.data_nasc 
            })


            }catch (error:any) {
                res.status(400).send({
                    message: error.message || error.sqlMessage
                })
          }
    }