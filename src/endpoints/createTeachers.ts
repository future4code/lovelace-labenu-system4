import {Request, Response} from 'express';
// import moment from 'moment';
import insertTeacher from '../data/insertTeacher';

export default async function createTeacher(

    req:Request,
    res:Response


){
    try {
         
            if(
                !req.body.nome ||
                !req.body.email ||
                !req.body.data_nascimento ||
                !req.body.especialidade ||
                !req.body.class_id
                

            ){ res.status(400).send({
               message:'Preencha os campos!"'
             })
             return 
               
        }

                const id: string = Date.now() + Math.random().toString()

                await insertTeacher(
                    id,
                    req.body.nome,
                    req.body.email,
                    req.body.data_nascimento,
                    req.body.especialidade,
                    req.body.class_id,

                )
                res
                .status(200).send({
                    message:'Professor criado com sucesso!',
                    id,
                    name: req.body.nome,
                    email: req.body.email,

                    
                })
               

            }catch (error:any){
                res.status(400).send({
                message: error.message || error.sqlMessage
            })
            
        }

}