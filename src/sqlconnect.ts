import { DataSource } from "typeorm";
import { Category } from "./Entities/Category";
import { Customer } from "./Entities/Customer";
import { History } from "./Entities/History";
import { Note } from "./Entities/Note";



    const dataSource = new DataSource({
        "type": "mysql",
        "host": "localhost",
        "port": 3306,
        "username": "admin1",
        "password": "G7vd]8)TR.bT/BFe",
        "database": "edvisory",
        "synchronize": true,
        "logging": true,
        "entities": [Customer,Note,Category,History],
    })
    console.log("connected");
    dataSource.initialize()


export default dataSource