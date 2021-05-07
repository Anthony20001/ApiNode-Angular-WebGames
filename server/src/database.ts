import mysql from 'promise-mysql';

import keys from './keys'; //importando la configuracionde base de datos

export const db = mysql.createPool(keys.database); //prodria utilizar createconnection, sin embargo este es mas recomendable en produccion, empieza a ejecutare el modulo de conexion a la vase de datos
db.getConnection()//para poder empezar a enviar consultas y demas
 .then(connection =>{
     db.releaseConnection(connection);
     console.log('\nDB is working...');
 });
 /* esto funciona con npm i promise-mysql@3.3.1*/



 
 /*import { createPool } from "promise-mysql";
import keys from "./keys";

export async function connect(){
    const connection = createPool(keys.database);
    console.log('DB is Connect Successfully...');

    return connection;
}*/
