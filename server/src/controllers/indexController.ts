import {Request, Response} from 'express';

class IndexControlller{
    public index = (req: Request, res: Response) =>{
        //res.send('hello');
        res.json({text: 'hola'})
    }
}

export const indexController = new IndexControlller();