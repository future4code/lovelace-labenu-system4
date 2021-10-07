import { connection } from './connection';
import { MODULO } from '../types';

export default async function insertClass(
    id: string,
    nome: string,
    data_inicio: string,
    data_termino: string,
    modulo: MODULO[],

) {
    await connection.insert(
        {
            id,
            nome,
            data_inicio,
            data_termino,
            modulo,
        }
    ).into('Class')
}