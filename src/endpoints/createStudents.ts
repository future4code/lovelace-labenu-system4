import {Request, Response} from 'express';
import insertStudents from '../data/insertStudents';


export default async function createStudents(

    req:Request,
    res:Response


){

    const {name, email, data, class_id} = req.body

    try {
         
            if(
                !name ||
                !email ||
                !data ||
                !class_id


            ){ res.status(400).send({
               message:'Preencha os campos "name","email" e "data" e "hobbie"'
             })
             return 
               
        }

        function formatDate(date: string): string {
            const day = date.split("/")[0];
            const month = date.split("/")[1];
            const year = date.split("/")[2];
            return year + '-' + ("0" + month).slice(-2) + '-' + ("0" + day).slice(-2);
        }

        const formattedData: string = formatDate(data)

                const id: string = Date.now() + Math.random().toString()

                await insertStudents(
                    id,
                    name,
                    email,
                    formattedData,
                    class_id
                )
                res
                .status(200).send({
                    message:'Estudante criado com sucesso!',
                    id,
                    name:name,
                    email:email,
                    data:formattedData,
                    class_id: class_id
                   
                })
               

            }catch (error:any){
                res.status(400).send({
                message: error.message || error.sqlMessage
            })
            
        }

}