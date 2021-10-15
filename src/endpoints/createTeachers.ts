import { Request, Response } from 'express';
import insertTeacher from '../data/insertTeacher';

export default async function createTeacher(

    req: Request,
    res: Response

){

    const {nome, email, data_nascimento, especialidade, class_id} = req.body

    try {

        if (
            !nome ||
            !email ||
            !data_nascimento ||
            !especialidade ||
            !class_id


        ) {
            res.status(400).send({
                message: 'Preencha todos os campos!'
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

        const formattedDataNascimento: string = formatDate(data_nascimento)

        await insertTeacher(
            id,
            nome,
            email,
            formattedDataNascimento,
            especialidade,
            class_id,

        )
        res
            .status(200).send({
                message: 'Professor criado com sucesso!',
                id,
                name:nome,
                email:email,
                data_nascimento: formattedDataNascimento,
                especialidade: especialidade,
                class_id: class_id
            })


    } catch (error: any) {
        res.status(400).send({
            message: error.message || error.sqlMessage
        })

    }

}