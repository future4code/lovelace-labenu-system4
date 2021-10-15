import { ESPECIALIDADE } from '../types';
import { connection } from './connection';




export default async function insertSpecialty(
    id:string,
    nome:ESPECIALIDADE[]

){
    await connection.insert(
        {
            id,
            nome
        }
    ).into('especialidade')

}