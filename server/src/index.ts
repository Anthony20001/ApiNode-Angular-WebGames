import express, {Application} from 'express';
import morgan from 'morgan';
import cors from 'cors';

import indexRoutes from './routes/indexRoutes';
import gamesRoutes from './routes/gamesRoutes';



class Server{
    public app: Application; //del tipo Application

    constructor(){
        this.app = express(); //inicializa express
        this.config(); //el constructor se ejecuta apenas instancio la clase, a la vez ejecuto estos metodos primero para evitar problemas
        this.routes();
    }

    config():void{
        this.app.set('port', process.env.PORT || 3000); //port es como una variable. establezco el puerto
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json()); // este metodo de express es para poder leer formato json
        this.app.use(express.urlencoded());// para enviaro validar desde un formulario html
    } 

    routes(): void{
        this.app.use(indexRoutes); //usando clase indexRoutes
        this.app.use('/api/games', gamesRoutes); //usando instancia gameRoutes de la clase GamesRoutes, lo mismo de arriba
    }

    start():void{
        this.app.listen(this.app.get('port'), ()=>{
            console.log('Server on port', this.app.get('port'));
        }); //para que se quede escuchando el servidor
    }
}

const server = new Server(); //para que me devuelva un objeto
server.start();
//npm i @types/morgan @types/cors 