"use strict";
import {Router} from 'express'; //Router es un metodo que me devuelve un objteto, dentro colocare las rutas

//importando controladores
import {indexController} from '../controllers/indexController';

class IndexRoutes{
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/', indexController.index);//esta ruta sera agregada a router (this.router.get), lo estare poblando en el constructor
    }
}

const indexRoutes = new IndexRoutes();
export default indexRoutes.router