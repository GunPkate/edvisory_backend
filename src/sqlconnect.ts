import { DataSource } from "typeorm";
import { Customer } from "./Entities/Customer";
import { Note } from "./Entities/Note";

export const main = async () => {

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
    await dataSource.initialize()
} 