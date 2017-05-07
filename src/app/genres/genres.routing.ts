import { Routes } from '@angular/router';
import { GenresComponent } from './genres.component';
import { GenresFormComponent } from './genres-form.component';


export const genresRoutes:Routes = [
    {
        path:'genres/new',
        component:GenresFormComponent

    },
    {
        path:'genres/edit/:id',
        component:GenresFormComponent

    },
    {
        path:'genres',
        component:GenresComponent

    } 
]