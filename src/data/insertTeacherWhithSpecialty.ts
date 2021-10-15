import { connection } from './connection';


export default async function insertTeacherWhithSpecialty(
    id: string,
    teacher_id:string,
    especialidade_id:string

){
    await connection.insert(
        {
            id,
            teacher_id,
            especialidade_id
        }
    ).into('teacher_especialidade')

}