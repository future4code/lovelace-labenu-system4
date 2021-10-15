import { connection } from './connection';


export default async function insertTeacher(
    id: string,
    nome:string,
    email:string,
    data_nascimento:string,
    especialidade:string,
    class_id:string,
 
   
){
    await connection.insert(
        {
            id,
            nome,
            email,
            data_nascimento,
            especialidade,
            class_id
        }
    ).into('Teacher')
}
