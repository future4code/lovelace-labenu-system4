import { connection } from './connection';

export default async function insertStudents(

    id:string,
    name:string,
    email:string,
    data:string,
    hobbie:string
   

){
    await connection.insert(
        {
            id,
            name,
            email,
            data_nasc:data,
            hobbie
          
        }
    ).into('students') 
}