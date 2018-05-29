import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import {Streamer} from './streamer';
import 'rxjs/add/operator/map';



interface Istreamer {results : Streamer[]}

@Injectable()
export class ApiService {

  constructor(private http: Http) { }

  public getStreamerbyID(name: string) {
    let myHeader = new Headers();
    myHeader.append("Client-ID", "rbltgng4vkv4yp7ogvxwf1jluzqw2e");
    let options = new RequestOptions({ headers : myHeader});
    return this.http.get("https://api.twitch.tv/kraken/streams/"+name, options).map(res => res.json())
  }
  
  public getStreamerByGame(game: string) : Observable <Streamer[]>{
    let myHeader = new Headers();
    myHeader.set("Client-ID", "rbltgng4vkv4yp7ogvxwf1jluzqw2e");
    let options = new RequestOptions();
    options.headers = myHeader;
    return this.http.get( "https://api.twitch.tv/kraken/streams/?game="+game, options).map(response => response.json().streams); //{
 //     const data : Istreamer = response.json();
//return data.results.map(streamer =>
 //     {return <Streamer> { 'viewers' : streamer.viewers,
  //      'name' : streamer.name,
  //      'url' : streamer.url }})
  //  })
  }

}
