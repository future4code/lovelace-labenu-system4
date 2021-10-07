import { Request, Response } from 'express';
import insertClass from '../data/insertClass';



export default async function createClass(

    req: Request,
    res: Response


) {
    try {

        if (
            !req.body.nome ||
            !req.body.data_inicio ||
            !req.body.data_termino ||
            !req.body.modulo
        ) {
            res.status(400).send({
                message: 'Preencha os campos!"'
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

        const formattedDate1: string = formatDate(req.body.data_inicio)
        const formattedDate2: string = formatDate(req.body.data_termino)

        await insertClass(
            id,
            req.body.nome,
            formattedDate1,
            formattedDate2,
            req.body.modulo

        )
        res
            .status(200).send({
                message: 'Classe criado com sucesso!',
                id,
                name: req.body.nome,
                inicio: req.body.data_inicio,
                termino: req.body.data_termino,
                modulo: req.body.modulo
                
            })


    } catch (error: any) {
        res.status(400).send({
            message: error.message || error.sqlMessage
        })

    }

}