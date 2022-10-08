import { DataSource, Entity } from 'typeorm';
import express,{ Application,Request,Response} from "express";
import { Customer } from './Entities/Customer';
import { Note } from './Entities/Note';
const port:number = 5000 
const app:Application = express();


app.get('/text',(req:Request,res:Response) =>{
    res.send('Hello Home')
})

// import {customer} from './Routes/customer'
// app.use(customer)

// import {note_orm} from './Routes/note_orm'
// app.use(note_orm)

const main = async () => {

    const dataSource = new DataSource({
        "type": "mysql",
        "host": "localhost",
        "port": 3306,
        "username": "admin1",
        "password": "G7vd]8)TR.bT/BFe",
        "database": "edvisory",
        "synchronize": true,
        "logging": true,
        "entities": [Customer,Note],
    })
    console.log("connected");
    


    app.get('/customer_orm/get',(req:Request,res:Response)=>{
        Customer.find({}).then((data)=>{
            res.status(200).json({
                resultcode:20000,
                resultDescription: data
            })
        })
    })

    app.post('/customer_orm/create',(req:Request,res:Response)=>{
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


    // load entities, establish db connection, sync schema, etc.
    await dataSource.initialize()
    
} 

main()
app.listen(port,() =>{console.log('Server running')})