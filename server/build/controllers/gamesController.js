"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
//trayendo  base de datos 
const database_1 = require("../database");
class GamesControlller {
    constructor() {
        this.list = (req, res) => __awaiter(this, void 0, void 0, function* () {
            //res.json('games');
            const games = yield database_1.db.query('SELECT * FROM games');
            res.json(games);
        });
        this.create = (req, res) => __awaiter(this, void 0, void 0, function* () {
            yield database_1.db.query('INSERT INTO games set ?', [req.body]);
            //console.log(req.body);
            res.json({ message: 'Game Save' });
        });
        this.delete = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.db.query('DELETE FROM games WHERE id = ?', [id]);
            res.json({ message: 'The game was deleted' });
        });
        this.update = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.db.query('UPDATE games set ? WHERE id = ?', [req.body, id]);
            res.json({ message: 'The was Updating' });
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //res.json({text: 'this is the game' + req.params.id});
            const { id } = req.params; //destructuring: obtener un solo elemento de un objeto
            const games = yield database_1.db.query('SELECT * FROM games WHERE id = ?', [id]);
            if (games.lenght != '') {
                return res.json(games[0]);
            }
            else {
                res.status(404).json({ text: 'The game does not exists' });
            }
            console.log(games);
        });
    }
}
const gamesController = new GamesControlller();
exports.default = gamesController;
