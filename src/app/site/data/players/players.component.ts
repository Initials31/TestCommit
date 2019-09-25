import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl } from '@angular/forms';
import { Player } from 'src/app/Models/players';
import { PlayerserviceService } from 'src/app/service/dataservice/playerservice.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {

  listPlayers: Player[];
  player: Player;
  selectedPlayer: Player;

  id: FormControl;
  firstName: FormControl;
  lastName: FormControl;
  subscriptionDate: FormControl;
  mail:FormControl;

  constructor(private playerService: PlayerserviceService, private router: Router, private route: ActivatedRoute) { 
  }

  ngOnInit() {

    this.playerService.getAllPlayers()
      .subscribe(
        data => this.listPlayers = data);
     
      }

      public deletePlayer(id: number) {
        this.playerService.deletePlayer(id)
        .subscribe(
          data => this.ngOnInit()
        )
      }

}
