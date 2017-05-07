import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//modules
import { SharedModule } from '../shared/shared.module';

//routes 
import { genresRoutes } from './genres.routing';

//components
import { GenresComponent } from './genres.component';
import { GenresFormComponent } from './genres-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule.forChild(genresRoutes)
  ],
  declarations: [
    GenresComponent,
    GenresFormComponent
  ]
})
export class GenresModule { } 
