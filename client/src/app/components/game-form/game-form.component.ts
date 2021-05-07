import { Component, OnInit } from '@angular/core';
import { Game } from 'src/app/models/Game';

//para guardar datos
import { GamesService } from '../../services/games.service';

import {Router, ActivatedRoute} from '@angular/router'; //Router me permite saber lo que estoy recibiendo
import { Subscriber } from 'rxjs';
//import { Route } from '@angular/compiler/src/core'; duplicated

@Component({
  selector: 'app-game-form',
  templateUrl: './game-form.component.html',
  styleUrls: ['./game-form.component.css']
})
export class GameFormComponent implements OnInit {

  game: Game ={
    id: 0,
    title: '',
    description: '',
    image: '',
    created_at: new Date()

  }; //objeto para almacenar juego

  edit: boolean = false;

  constructor(private gameService: GamesService, private router: Router, private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const params = this.activeRoute.snapshot.params //asi obtengo los parametros
    //console.log(params);
    if(params.id){
      this.gameService.getGame(params.id)
      .subscribe(
        res =>{
          console.log(res);
          this.game = res;
          this.edit = true;
        },
        err=>{
          console.error(err);
        }
      )
    }
  }

  saveGame(){
    //console.log(this.game);
    delete this.game.created_at;
    delete this.game.id;
    this.gameService.saveGame(this.game)
    .subscribe(
      res =>{
        console.log(res);
        this.router.navigate(['/games']); // para redirect a games al guardar un juego
      },
      err =>{
        console.error(err);
      }

    )
  }

  updateGame(){
    delete this.game.created_at;
    this.gameService.updateGame(this.game.id, this.game )
    .subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/games']);
      },
      err=>{
        console.error(err);
      }
    )
  }

}
