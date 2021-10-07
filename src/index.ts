import express, { Express } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import createStudents from "./endpoints/createStudents";
import createTeacher from "./endpoints/createTeachers";
import createClass from "./endpoints/createClass";

const app: Express = express();
app.use(express.json());
app.use(cors());

app.post('/students', createStudents)
app.post('/teacher', createTeacher)
app.post('/class', createClass)


const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});