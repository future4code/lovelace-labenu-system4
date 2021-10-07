import { connection } from './connection';
import { ESPECIALIDADE } from '../types';

export default async function insertTeacher(
    id: string,
    nome:string,
    email:string,
    data_nascimento:string,
    class_id:string,
 
   
){
    await connection.insert(
        {
            id,
            nome,
            email,
            data_nascimento,
            class_id
        }
    ).into('Teacher')
}