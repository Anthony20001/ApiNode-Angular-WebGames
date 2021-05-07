"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express"); //Router es un metodo que me devuelve un objteto, dentro colocare las rutas
//importando controladores
const indexController_1 = require("../controllers/indexController");
class IndexRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', indexController_1.indexController.index); //esta ruta sera agregada a router (this.router.get), lo estare poblando en el constructor
    }
}
const indexRoutes = new IndexRoutes();
exports.default = indexRoutes.router;
