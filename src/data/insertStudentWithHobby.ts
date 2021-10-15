import { connection } from './connection';

export default async function insertStudentWithHobby(
    id: string,
    student_id: string,
    hobbie_id: string

){
    await connection.insert(
        {
            id,
            student_id,
            hobbie_id
        }
    ).into('students_hobbie')

}