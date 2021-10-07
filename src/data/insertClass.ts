import { MODULO} from '../types';
import { connection } from './connection';


export default async function (
    
    id:string,
    nome:string,
    inicio:string,
    termino:string,
    modulo:MODULO

){
    await connection.insert(
        {
            id,
            nome,
            data_inicio: inicio,
            data_termino: termino,
            modulo
        }
    ).into('Class')

}