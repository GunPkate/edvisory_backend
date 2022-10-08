import express,{Router,Request,Response} from 'express'
const customer:Router =express.Router()
import {QueryDescription, SqlClient} from 'msnodesqlv8'

const sql: SqlClient = require("msnodesqlv8");

const connectionString = "server=.;Database=Acounting01;Trusted_Connection=Yes;Driver={SQL Server Native Client 11.0}";
const query = "Select * from UsersTable;";


customer.get('/customer',(req:Request,res:Response) =>{
    // res.send('Hello customer')
    sql.query(connectionString, query, (err, rows) => {
        // console.log(rows);
        res.status(200).json({
            code:20000,
            result: rows
        })
    });
})

export {customer} 