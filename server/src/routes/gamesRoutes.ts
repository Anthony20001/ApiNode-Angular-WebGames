"use strict";
"use strict";
import {Router} from 'express'; //Router es un metodo que me devuelve un objteto, dentro colocare las rutas

import gamesController from '../controllers/gamesController';


class GamesRoutes{
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/', gamesController.list); //esta ruta sera agregada a router (this.router.get), lo estare poblando en el constructor
        this.router.get('/:id', gamesController.getOne);
        this.router.post('/', gamesController.create);
        this.router.delete('/:id', gamesController.delete);
        this.router.put('/:id', gamesController.update);
    }
}

const gamesRoutes = new GamesRoutes();
export default gamesRoutes.router;
