import { connection } from './connection';

export default async function insertStudents(

    id:string,
    name:string,
    email:string,
    data:string,
    class_id:string
   

){
    await connection.insert(
        {
            id,
            name,
            email,
            data:data,
            class_id
          
        }
    ).into('students') 
}