import { Request, Response } from 'express';
// import moment from 'moment';
import insertTeacher from '../data/insertTeacher';

export default async function createTeacher(

    req: Request,
    res: Response


) {
    try {

        if (
            !req.body.nome ||
            !req.body.email ||
            !req.body.data_nascimento ||
            !req.body.especialidade ||
            !req.body.class_id


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

        const formattedBirthDate: string = formatDate(req.body.data_nascimento)

        await insertTeacher(
            id,
            req.body.nome,
            req.body.email,
            formattedBirthDate,
            req.body.especialidade,
            req.body.class_id,

        )
        res
            .status(200).send({
                message: 'Professor criado com sucesso!',
                id,
                name: req.body.nome,
                email: req.body.email,
            })


    } catch (error: any) {
        res.status(400).send({
            message: error.message || error.sqlMessage
        })

    }

}