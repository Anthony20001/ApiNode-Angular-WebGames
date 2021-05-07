import {Request, Response} from 'express';

//trayendo  base de datos 
import {db} from '../database';

class GamesControlller{

    public list = async(req: Request, res: Response) =>{
        //res.json('games');
        const games = await db.query('SELECT * FROM games');
        res.json(games);
    }

    public async getOne(req: Request, res: Response) : Promise<any>{
        //res.json({text: 'this is the game' + req.params.id});
        const {id} = req.params;//destructuring: obtener un solo elemento de un objeto
        const games = await db.query('SELECT * FROM games WHERE id = ?', [id]);
        if(games.lenght != ''){
            return res.json(games[0]);
        }else{
            res.status(404).json({text: 'The game does not exists'});
        }
        console.log(games);
        
    }

    public create = async (req: Request, res: Response) =>{
        await db.query('INSERT INTO games set ?', [req.body]);
        //console.log(req.body);
        res.json({message: 'Game Save'});
    }

    public delete = async(req: Request, res:Response)=>{
        const {id} = req.params;
        await db.query('DELETE FROM games WHERE id = ?', [id]);
        res.json({message: 'The game was deleted'});
    }

    public update = async(req:Request, res:Response) =>{
        const {id} = req.params;
        await db.query('UPDATE games set ? WHERE id = ?', [req.body, id]);
        res.json({message: 'The was Updating'});
    }


}

const gamesController = new GamesControlller();
export default gamesController;