import express from 'express';
import chalk from 'chalk';
let myApp = express();
import cookieParser from 'cookie-parser';
let port = 3222;
import fs from 'fs';
//import path from 'path';
import multer from 'multer';
import { CreateUser } from './Routes/CreateUser/createUser.js';
myApp.use(express.json({limit:"1gb"}));
myApp.use(cookieParser());
myApp.use("/Images",express.static('Images'));


// Multer storage config
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const dir = "./Images/Avtar";
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
        }
        cb(null, dir);
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + "-" + file.originalname);
    }
});
// File filter (only jpg, jpeg, png)
const fileFilter = (req, file, cb) => {
    const allowed = /jpg|jpeg|png/;
    const ext = file.mimetype.split("/")[1];
    if (allowed.test(ext)) {
        cb(null, true);
    } else {
        cb(new Error("Only .jpg, .jpeg, .png are allowed"), false);
    }
};
// Multer middleware
const upload = multer({
    storage: storage,
    fileFilter: fileFilter,
    limits: { fileSize: 2 * 1024 * 1024 } // 2 MB
});

// myApp.get("/test",async (rkv,rspo) => { // just a test api 
//     try {
//         let [rows] = await connection.query("SELECT * FROM USERS;")
//         rspo.status(201).send({rows});
//     } catch (error) {
//         rspo.status(500).send({msg:"Something went wrong",details:error.message});
//     }
// })


myApp.post("/CreateUser",upload.single("file"),CreateUser)
myApp.listen(port,()=>{
    console.log(chalk.greenBright.yellow.italic.bold("server is start on "+port))
})