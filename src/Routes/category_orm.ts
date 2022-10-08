import { Category } from './../Entities/Category';
import express,{Router,Request,Response} from 'express'

export const note_orm:Router = express.Router();

note_orm.post('/note_orm2/create',(req:Request,res:Response)=>{
    try {
        Category.insert({
            id: 1,
            titlename: 'hello',
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
    Category.find().then((data)=>{
        res.status(200).json({
            resultcode:20000,
            resultDescription: data
        })
    })
})