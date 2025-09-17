import express from 'express';
import chalk from 'chalk';
let myApp = express();
let port = 3222
myApp.listen(port,()=>{
    console.log(chalk.greenBright.white.italic.bold("server is start on "+port))
})