import {createConnection} from "mysql";
import * as dotenv from "dotenv";

dotenv.config()

const connection = createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
})


export default connection