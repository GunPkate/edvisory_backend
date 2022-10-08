import { History } from '../Entities/History';
import express,{Router,Request,Response} from 'express'

export const history_orm:Router = express.Router();

history_orm.post('/history_orm/create',(req:Request,res:Response)=>{
    try {
        History.insert({
            customer_id: 1,
            note_id: 1,
            // date: Date.now(),
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

history_orm.get('/history_orm/getall',(req:Request,res:Response)=>{
    History.find().then((data)=>{
        res.status(200).json({
            resultcode:20000,
            resultDescription: data
        })
    })
})