import { Sequelize } from "sequelize";

const db = new Sequelize('api','root','',{
    host:'localhost',
    port:'3306',
    dialect:'mysql'
})

export default db