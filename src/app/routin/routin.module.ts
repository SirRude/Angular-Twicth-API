import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import {InfoComponent} from '../info/info.component'
import { StreamVideoSiteComponent } from '../stream-video-site/stream-video-site.component';

const appRoutes: Routes = [
  { path: 'info', component: InfoComponent },
  { path: 'stream-video-site/:name', component: StreamVideoSiteComponent},

  { path: '', redirectTo: '/info', pathMatch: 'full' },
  { path: '**', component: InfoComponent }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class RoutinModule { }
