import express,{ Application,Request,Response} from "express";
import { main } from './sqlconnect';
const port:number = 5000 
const app:Application = express();


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
    
app.listen(port,() =>{console.log('Server running')})