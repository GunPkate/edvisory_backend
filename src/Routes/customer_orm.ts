import express,{Router,Request,Response} from 'express'
import { Customer } from '../Entities/Customer';

export const customer_orm:Router = express.Router();

customer_orm.get('/customer_orm/get',(req:Request,res:Response)=>{
    Customer.find({}).then((data)=>{
        res.status(200).json({
            resultcode:20000,
            resultDescription: data
        })
    })
})

customer_orm.post('/customer_orm/create',(req:Request,res:Response)=>{
    try {
        Customer.insert({
            firstName:"Gun",
            lastName:"P",
            email:"gun@p.com",
            password:'1111'
        })
        res.status(200).json({
            resultcode:20000,
            resultDescription: "data created"
        })
    } catch (error) {
        res.status(500).json({
            resultcode:50000,
            resultDescription: error
        })
    }          
})