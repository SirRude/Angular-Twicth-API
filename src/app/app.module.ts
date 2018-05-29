import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import {HttpClientModule} from '@angular/common/http';



import { AppComponent } from './app.component';
import { InfoComponent } from './info/info.component';
import { RoutinModule } from './routin/routin.module';
import { ApiService } from './api.service';
import { StreamVideoSiteComponent } from './stream-video-site/stream-video-site.component';

@NgModule({
  declarations: [
    AppComponent,
    InfoComponent,
    StreamVideoSiteComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RoutinModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
