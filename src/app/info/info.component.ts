import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service'
import { ActivatedRoute, Router, Params } from '@angular/router'
import {Streamer } from '../streamer'
import { Http } from '@angular/http';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css'],
  providers:[ApiService]
})
export class InfoComponent implements OnInit {

  private streamer: Streamer[];
  theGame: string;

  constructor(
    private service : ApiService,
    private route: ActivatedRoute,
    private router: Router) { 
      this.loadstreams("Path of exile");
    }

  ngOnInit() {
    
  }

  loadstreams(Game: string){
    
    console.log(this.service.getStreamerByGame(Game).subscribe(response => this.streamer = response))
    this.theGame=Game;
  }

  loadGames(){
    
  }
  

}
