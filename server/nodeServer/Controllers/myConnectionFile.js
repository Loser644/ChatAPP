import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
import chalk from 'chalk';
dotenv.config();
async function setConnection() {
    try {
        const connection = await mysql.createConnection({
            host:process.env.mySQL_host,
            user:process.env.mySQL_user,
            password:process.env.mySQL_password,
            database:process.env.mySQL_DB,
            waitForConnections:true,
            connectionLimit:process.env.mySQL_limit
        })
        console.log(chalk.green("Succesfully connected with mySQL"))
        return connection;
    } catch (error) {
        console.log(chalk.red("something went wrong"+error.message))
    }
}
const connection = await setConnection();
export {connection}