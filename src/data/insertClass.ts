import { MODULO} from '../types';
import { connection } from './connection';


export default async function (
    
    id:string,
    nome:string,
    data_inicio:string,
    data_termino:string,
    modulo:MODULO

){
    await connection.insert(
        {
            id,
            nome,
            data_inicio,
            data_termino,
            modulo
        }
    ).into('Class')

}