import { Request, Response } from 'express';
import insertClass from '../data/insertClass';



export default async function createClass(

    req: Request,
    res: Response
) {

    const {nome, data_inicio,data_termino, modulo} = req.body

    try {

        if (
            !nome ||
            !data_inicio ||
            !data_termino ||
            !modulo
        ) {
            res.status(400).send({
                message: 'Preencha todos os campos "nome","data_inicio", "data_termino" e "modulo"'
            })
            return

        }

        const id: string = Date.now() + Math.random().toString()
        function formatDate(date: string): string {
            const day = date.split("/")[0];
            const month = date.split("/")[1];
            const year = date.split("/")[2];
            return year + '-' + ("0" + month).slice(-2) + '-' + ("0" + day).slice(-2);
        }

        const formattedDate1: string = formatDate(data_inicio)
        const formattedDate2: string = formatDate(data_termino)

        await insertClass(
            id,
            nome,
            formattedDate1,
            formattedDate2,
            modulo

        )
        res
            .status(200).send({
                message: 'Classe criada com sucesso!!!',
                id,
                nome: nome,
                inicio: data_inicio,
                termino: data_termino,
                modulo: modulo
                
            })


    } catch (error: any) {
        res.status(400).send({
            message: error.message || error.sqlMessage
        })

    }

}