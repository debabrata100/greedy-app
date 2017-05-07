import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

//Modules 
import { TracksModule } from './tracks/tracks.module';
import { GenresModule } from './genres/genres.module';
//Services
import { MusicService } from './music.service';

//Routes
import { appRoutes } from './app.routing';

import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    TracksModule,
    GenresModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [MusicService],
  bootstrap: [AppComponent]
})
export class AppModule { }
