import { Component, OnInit } from '@angular/core';

import {GamesService} from '../../services/games.service';
@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {

  //para almacenar
  games: any = [];


  constructor(private gameSevice: GamesService) { }

  ngOnInit(): void {
   this.getGames();
  }

  getGames(){ //esta funcion sera usada para actualizar la lista
    this.gameSevice.getGames().subscribe(
      res => {
        this.games = res;
      },
      err => console.error(err)
    )
  }

  deleteGame(id: string){
    this.gameSevice.deleteGame(id).subscribe(
      res=>{
        console.log(res);
        this.getGames(); //llamada a funcion para actualizar lista
      },
      err=>{
        console.error(err);
      }
    )
  }


}
