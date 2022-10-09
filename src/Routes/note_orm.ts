import { Customer } from './../Entities/Customer';
import express,{Router,Request,Response} from 'express'
import { Note } from "../Entities/Note"

export const note_orm:Router = express.Router();

note_orm.post('/note_orm/create',(req:Request,res:Response)=>{
    const input = req.body
    try {
        const new_data = {
            customer_id: input.Customer_id,
            title: input.title,
            text: input.text,
            date: new Date(Date.now())
        }
        Note.insert(new_data)
        res.status(200).json({
            resultcode:20000,
            resultDescription: "note created",
            resultData: new_data
        })
    } catch (error) {
        res.status(500).json({
            resultcode:50000,
            resultDescription: error
        })
    }
})

note_orm.get('/note_orm/getall',(req:Request,res:Response)=>{
    Note.find().then((data)=>{
        res.status(200).json({
            resultcode:20000,
            resultDescription: data
        })
    })
})