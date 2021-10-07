import { Request, Response } from 'express';
import insertClass from '../data/insertClass';

export default async function createClass(
    req:Request,
    res:Response

){
    
    const { nome, data_inicio, data_termino, modulo } = req.body

    try {

        if(
            !nome ||
            !data_inicio ||
            !data_termino ||
            !modulo

        ){res.status(400).send({
            message:'Preencha os campos "nome","inicio", "termino" e "modulo"'
          })
          return 
        }


        function formatDate(date: string): string {
            const day = date.split("/")[0];
            const month = date.split("/")[1];
            const year = date.split("/")[2];
            return year + '-' + ("0" + month).slice(-2) + '-' + ("0" + day).slice(-2);
        }
        
        const formattedDataInicio: string = formatDate(data_inicio)

        const formattedDataTermino: string = formatDate(data_termino)

        const id: string = Date.now() + Math.random().toString()

        await insertClass(
            id,
            nome,
            data_inicio,
            data_termino,
            modulo
        )

        res
        .status(200).send({
            message:'Turma criada com sucesso!',
            id,
            nome: nome,
            inicio: data_inicio,
            termino: data_termino,
            modulo: modulo
            
        })



    }catch (error:any){
        res.status(400).send({
           message: error.message || error.sqlMessage
       })
   }


}