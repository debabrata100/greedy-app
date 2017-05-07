import { Routes } from '@angular/router';
import { TracksComponent } from './tracks.component';
import { TracksFormComponent } from './tracks-form.component';

export const tracksRoutes:Routes = [
    {
        path:'tracks/new',
        component:TracksFormComponent

    },
    {
        path:'tracks/edit/:id',
        component:TracksFormComponent

    },
    {
        path:'tracks',
        component:TracksComponent

    },
]