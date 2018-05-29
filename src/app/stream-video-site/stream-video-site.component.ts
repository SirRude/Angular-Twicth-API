import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ApiService } from '../api.service'
import { ActivatedRoute, Router, Params } from '@angular/router'
import { Streamer } from '../streamer'
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-stream-video-site',
  templateUrl: './stream-video-site.component.html',
  styleUrls: ['./stream-video-site.component.css'],
  providers: [ApiService],
})
export class StreamVideoSiteComponent implements OnInit {

 name : string;

    videoUrl;
    dangerousVideoUrl;
    chatUrl;
    dangerousChatUrl;
    channel;

  constructor(  
    private service : ApiService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private sanitizer: DomSanitizer) { 
      this.name = this.route.snapshot.params['name'];
      this.updateVideoUrl();
      this.updateChatUrl();
    }

  ngOnInit() {
  }

  updateVideoUrl() {
    // Appending an ID to a YouTube URL is safe.
    // Always make sure to construct SafeValue objects as
    // close as possible to the input data so
    // that it's easier to check if the value is safe.
    this.dangerousVideoUrl = 'http://player.twitch.tv/?channel=' + this.name ;
    this.videoUrl =
        this.sanitizer.bypassSecurityTrustResourceUrl(this.dangerousVideoUrl);

  }
  updateChatUrl() {
    this.dangerousChatUrl = 'https://www.twitch.tv/embed/'+this.name+ '/chat?darkpopout' ;
    this.chatUrl =
            this.sanitizer.bypassSecurityTrustResourceUrl(this.dangerousChatUrl);
  
  }

  public back() {
    this.location.back();
  }
}
