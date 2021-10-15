import { connection } from './connection';


export default async function insertHobbie(
    id:string,
    name:string

){
    await connection.insert(
        {
            id,
            name
        }
    ).into('hobbie')

}