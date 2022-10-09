import express,{ Application,Request,Response} from "express";
import { main } from './sqlconnect';
import cors from 'cors'

const port:number = 5000 
const app:Application = express();

 /* CORS */
const allowedOrigins = ['http://localhost:3000'];

const options: cors.CorsOptions = {
  origin: allowedOrigins
};
app.use(cors(options));
app.use(express.json());

app.get('/text',(req:Request,res:Response) =>{
    res.send('Hello Home')
})

// import {customer} from './Routes/customer'
// app.use(customer)
main()

import {note_orm} from './Routes/note_orm'
app.use(note_orm)

import {customer_orm} from './Routes/customer_orm'
app.use(customer_orm)

import {category_orm} from './Routes/category_orm'
app.use(category_orm)

import {history_orm} from './Routes/history_orm'
app.use(history_orm)
    
app.listen(port,() =>{console.log('Server running')})