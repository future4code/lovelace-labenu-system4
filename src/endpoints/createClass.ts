import { Request, Response } from 'express';
import insertClass from '../data/insertClass';

export default async function createClass(
    req:Request,
    res:Response

){
    try {

        if(
            !req.body.nome ||
            !req.body.incio ||
            !req.body.termino ||
            !req.body.modulo

        ){res.status(400).send({
            message:'Preencha os campos "nome","inicio", "termino" e "modulo"'
          })
          return 
        }

        const id: string = Date.now() + Math.random().toString()

        await insertClass(
            id,
            req.body.nome,
            req.body.inicio,
            req.body.termino,
            req.body.modulo
        )

        res
        .status(200).send({
            message:'Turma criada com sucesso!',
            id,
            nome: req.body.nome,
            inicio: req.body.inicio,
            termino: req.body.termino,
            modulo: req.body.modulo
            
        })



    }catch (error:any){
        res.status(400).send({
           message: error.message || error.sqlMessage
       })
   }


}