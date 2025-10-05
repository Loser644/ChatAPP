import fs from 'fs';
import chalk from 'chalk'
import mysql2 from 'mysql2/promise';
import dotenv from 'dotenv';
dotenv.config();
async function sql() {
    try {
        const connection = await mysql2.createConnection({
            host:process.env.mySQL_host,
            user:process.env.mySQL_user,
            password:process.env.mySQL_password,
            multipleStatements:true,
            waitForConnections:true
        })
        console.log(chalk.green.bold("✅Succesfully build connection with MySQL"));
        return connection;
    } catch (error) {
        console.log(chalk.red("something went wrong"+error.message))
    }
}

const connection = await sql();

async function migrate() {
    try {
        let dbStepFile = fs.readFileSync("./server/nodeServer/mySQL/init.sql","utf-8");
        dbStepFile = dbStepFile.replace(/^\uFEFF/,''); //strip the BOM from the file if present
        await connection.query(dbStepFile);
        console.log(chalk.bold.green("✅Database Schema applied succesfully"));
    }catch (err) {
     console.error(chalk.red("❌ Migration failed:"), err.message);
    }
     finally {
      await connection.end();
     }
}

migrate();