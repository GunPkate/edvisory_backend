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

customer_orm.post('/customer_orm/create',async (req:Request,res:Response)=>{
    try {
        // console.log(req.body)
        let input = req.body
        let  findresult = await Customer.find({
           
        })
        // console.log(findresult);
        
        if(!findresult){
            const data = Customer.insert({
                firstName: input.firstName,
                lastName:  input.lastName,
                email:     input.email,
                password:  input.password
            })
            res.status(200).json({
                resultcode:20000,
                resultDescription: "data created",
                resultData: data
            })
        }else{
            res.status(400).json({
                resultcode:40000,
                resultDescription: "duplicated data"
            })
        }
    } catch (error) {
        res.status(500).json({
            resultcode:50000,
            resultDescription: error
        })
    }          
})