import { JoinColumn } from 'typeorm';
import { Customer } from './../Entities/Customer';
import express,{Router,Request,Response} from 'express'
import { Note } from "../Entities/Note"
import { History } from '../Entities/History';
import { Category } from '../Entities/Category';
import { DataSource } from 'typeorm';
import dataSource from '../sqlconnect';

export const note_orm:Router = express.Router();



note_orm.post('/note_orm/create',async(req:Request,res:Response)=>{
    const input = req.body
    console.log(input)
    
    try {
        if(input){
    let str_txt = input.text
    let str_title = input.title
    const ngwords = ["shit", "fuck", "bad","not good","lazy"];
    for (let i of ngwords){
        let word = i.length
        let cen = ''
        for(let y=0; y <word;y++){cen += '*'}
        str_txt = str_txt.replace(i,i?cen:i)
        str_title = str_title.replace(i,i?cen:i)
    }
    const history = History.create({date:new Date(Date.now()).toDateString()})
    await dataSource.manager.save(history);
    
    const category = Category.create({ title: str_title,})
    await dataSource.manager.save(category)

        const new_data = {
            customerId: input.customerId,
            category_id: category.id,
            text: str_txt,
            date_id: history.id
        }
    const note = await Note.insert(new_data)
    
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
    // dataSource.createQueryBuilder().select("*").from(Note)
})

note_orm.delete('/note_orm/delete',async (req:Request,res:Response)=>{
    try {
        let  check = await Note.find({
            where:{id:req.body.id}
         })
        if(check.length >0){
            Note.delete({id:req.body.id}).then((data)=>{
                res.status(200).json({
                    resultcode:20000,
                    resultDescription: "this is delete"
                })
            })
        }else{
            res.status(400).json({
                resultcode:40000,
                resultDescription: "data not found"
            }) 
        }
    } catch (error) {
        res.status(500).json({
            resultcode:50000,
            resultDescription: error
        })
    }
    

})

