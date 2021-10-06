import {Request, Response} from 'express';
// import moment from 'moment';
import insertStudents from '../data/insertStudents';


export default async function createStudents(

    req:Request,
    res:Response


){
    try {
         
            if(
                !req.body.name ||
                !req.body.email ||
                !req.body.data ||
                !req.body.hobbie
                

            ){ res.status(400).send({
               message:'Preencha os campos "name","email" e "data"'
             })
             return 
               
        }

                const id: string = Date.now() + Math.random().toString()

                await insertStudents(
                    id,
                    req.body.name,
                    req.body.email,
                    req.body.data,
                    req.body.hobbie
                )
                res
                .status(200).send({
                    message:'Estudante criado com sucesso!',
                    id,
                    name: req.body.name,
                    email: req.body.email,
                    data:req.body.data,
                    hobbie: req.body.hobbie
                    
                })
               

            }catch (error:any){
                res.status(400).send({
                message: error.message || error.sqlMessage
            })
            
        }

}