"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
const gamesRoutes_1 = __importDefault(require("./routes/gamesRoutes"));
class Server {
    constructor() {
        this.app = express_1.default(); //inicializa express
        this.config(); //el constructor se ejecuta apenas instancio la clase, a la vez ejecuto estos metodos primero para evitar problemas
        this.routes();
    }
    config() {
        this.app.set('port', process.env.PORT || 3000); //port es como una variable. establezco el puerto
        this.app.use(morgan_1.default('dev'));
        this.app.use(cors_1.default());
        this.app.use(express_1.default.json()); // este metodo de express es para poder leer formato json
        this.app.use(express_1.default.urlencoded()); // para enviaro validar desde un formulario html
    }
    routes() {
        this.app.use(indexRoutes_1.default); //usando clase indexRoutes
        this.app.use('/api/games', gamesRoutes_1.default); //usando instancia gameRoutes de la clase GamesRoutes, lo mismo de arriba
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port', this.app.get('port'));
        }); //para que se quede escuchando el servidor
    }
}
const server = new Server(); //para que me devuelva un objeto
server.start();
//npm i @types/morgan @types/cors 
