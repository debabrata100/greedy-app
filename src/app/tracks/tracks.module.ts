import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//modules
import { SharedModule } from '../shared/shared.module';

//routes
import  { tracksRoutes } from './tracks.routing';

//components
import { TracksComponent } from './tracks.component';
import { RatingsComponent } from '../shared/ratings.component';
import { TracksFormComponent } from './tracks-form.component';

//pipes
import { DisplayGeneresPipe } from './display-genres.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule.forChild(tracksRoutes)
  ],
  declarations: [
    TracksComponent,
    TracksFormComponent,
    RatingsComponent,
    DisplayGeneresPipe
    ]
})
export class TracksModule { }
