import { connection } from './connection';


export default async function selectAgeStudentById(
   
    id:string,


){
    const result = await connection('students')
    .select('*')
    .where({id})

    return result[0]
}