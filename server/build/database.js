"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
const promise_mysql_1 = __importDefault(require("promise-mysql"));
const keys_1 = __importDefault(require("./keys")); //importando la configuracionde base de datos
exports.db = promise_mysql_1.default.createPool(keys_1.default.database); //prodria utilizar createconnection, sin embargo este es mas recomendable en produccion, empieza a ejecutare el modulo de conexion a la vase de datos
exports.db.getConnection() //para poder empezar a enviar consultas y demas
    .then(connection => {
    exports.db.releaseConnection(connection);
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
