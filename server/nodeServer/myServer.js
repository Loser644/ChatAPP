import express from 'express';
import chalk from 'chalk';
import {connection} from './Controllers/myConnectionFile.js';
let myApp = express();
let port = 3222;
myApp.use(express.json())
myApp.get("/test",async (rkv,rspo) => {
    try {
        let [rows] = await connection.query("SELECT * FROM USERS;")
        rspo.status(201).send({rows});
    } catch (error) {
        rspo.status(500).send({msg:"Something went wrong",details:error.message});
    }
})

myApp.listen(port,()=>{
    console.log(chalk.greenBright.yellow.italic.bold("server is start on "+port))
})