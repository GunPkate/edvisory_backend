import { Category } from './../Entities/Category';
import express,{Router,Request,Response} from 'express'

export const category_orm:Router = express.Router();

category_orm.post('/category_orm/create',(req:Request,res:Response)=>{
    try {
        Category.insert({
            // id: 1,
            // title: 'hello',
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

category_orm.get('/category_orm/getall',(req:Request,res:Response)=>{
    Category.find().then((data)=>{
        res.status(200).json({
            resultcode:20000,
            resultDescription: data
        })
    })
})