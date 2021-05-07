"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexController = void 0;
class IndexControlller {
    constructor() {
        this.index = (req, res) => {
            //res.send('hello');
            res.json({ text: 'hola' });
        };
    }
}
exports.indexController = new IndexControlller();
