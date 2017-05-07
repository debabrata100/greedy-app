import { Component, OnInit, OnDestroy } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

//service
import { MusicService } from '../music.service';

export class Track{
    id: number;
    name: string;
}

@Component({
  selector: 'app-genres-form',
  templateUrl: './genres-form.component.html'
})
export class GenresFormComponent implements OnInit,OnDestroy {

    title = "New Genre";
    tab = "genres";
    genre = new Track();
    form:FormGroup; 
    subscription;
    
    constructor(
        private _musicService:MusicService,
        private _route:ActivatedRoute,
        private _router: Router,
        fb:FormBuilder
    ) { 

        this.form = fb.group({
			name: ['', Validators.required]
		});
    }

    ngOnInit() {
        //Getting a single genre using genre id
        this.subscription = this._route.params.subscribe(params=>{
            let id = params['id'];
			this.title = id ?"Edit Genre":"New Genre";
			if(!id)
				return;
				var track = this._musicService.getGenre(id)
				.then(
                    genre=>{
                        this.genre = genre;
                }).catch(error=>{
                    //if error occurs, redirect to tracks
                    this._router.navigate(['/genre']);
                });
        });
    } 

    // Saving a Genere
    saveGenre(){
        let result;
        
        if(this.genre.id)
           result = this._musicService.updateGenre(this.genre);
        else   
        result = this._musicService.addGenre(this.genre);
        this._router.navigate(['/genres']);
    }
    // Unsubscribe the subscription
    ngOnDestroy(){
        this.subscription.unsubscribe();
    }
     

}
