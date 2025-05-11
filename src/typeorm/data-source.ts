import "reflect-metadata"
import { DataSource } from "typeorm"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "database",
    port: 5432,
    username: "postgres",
    password: "postgres",
    database: "nest_js_sandbox",
    synchronize: true,
    logging: false,
    entities: [],
    migrations: [],
    subscribers: [],
})
