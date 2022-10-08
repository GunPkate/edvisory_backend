import express,{Router,Request,Response} from 'express'
import { Note } from "../Entities/Note"

export const note_orm:Router = express.Router();

note_orm.post('/note_orm2/create',(req:Request,res:Response)=>{
    try {
        Note.insert({
            customer_id: 1,
            title: 'hello',
            content: 'hello world',
        })
        res.status(200).json({
            resultcode:20000,
            resultDescription: "note created"
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