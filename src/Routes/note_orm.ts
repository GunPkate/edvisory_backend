import { Customer } from './../Entities/Customer';
import express,{Router,Request,Response} from 'express'
import { Note } from "../Entities/Note"

export const note_orm:Router = express.Router();

note_orm.post('/note_orm/create',(req:Request,res:Response)=>{
    const input = req.body
    console.log(input)
    
    let str_txt = input.text
    let str_title = input.title
    const ngwords = ["shit", "fuck", "bad","piece of shit"];
    for (let i of ngwords){
        let word = i.length
        let cen = ''
        for(let y=0; y <word;y++){cen += '*'}
        str_txt = str_txt.replace(i,i?cen:i)
        str_title = str_title.replace(i,i?cen:i)
    }
    try {
        if(input){
            const new_data = {
                customer_id: input.Customer_id,
                title: str_title,
                text: str_txt,
                date: new Date(Date.now())
            }
        Note.insert(new_data)
        res.status(200).json({
            resultcode:20000,
            resultDescription: "note created",
            resultData: new_data
        })
    }else{
        res.status(400).json({
            resultcode:40000,
            resultDescription: "invalid input",
        })
    }
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
            resultDescription: "note created",
            resultData: data
        })
    })
})

note_orm.post('/note_orm/delete',(req:Request,res:Response)=>{
    // Note.find({}).then((data)=>{
        res.status(200).json({
            resultcode:20000,
            resultDescription: "this is delete"
        })
    // })
})