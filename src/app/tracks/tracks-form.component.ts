import { Component, OnInit, OnDestroy } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

//service
import { MusicService } from '../music.service';

export class Track{
    id: number;
    title: string;
    rating: number;
    genres:number[];
}

@Component({
  selector: 'app-tracks-form',
  templateUrl: './tracks-form.component.html',
  styleUrls: ['./tracks-form.component.css']
})
export class TracksFormComponent implements OnInit, OnDestroy {

    title = "New Track";
    tab = "tracks";
    genres = []; 
    track = new Track();
    form:FormGroup; 
    trackSubscription;
    
    constructor(
        private _musicService:MusicService,
        private _route:ActivatedRoute,
        private _router: Router,
        fb:FormBuilder
    ) { 

        this.form = fb.group({
			title: ['', Validators.required],
            rating:['',Validators.required],
            genres:[]
		});
    }

    ngOnInit() {

        //Getting a list of genres here
            this._musicService.getGenres()
            .then(res=>{
                this.genres = res.results;
            });

            //Getting a single track using track id
            this.trackSubscription = this._route.params.subscribe(params=>{
                let id = params['id'];
                this.title = id ?"Edit Track":"New Track";
                if(!id)
                    return;
                    var track = this._musicService.getTrack(id)
                    .then(
                        track=>{
                            this.track = this.formatTrack(track);
                    }).catch(error=>{
                        //if error occurs, redirect to tracks
                        this._router.navigate(['/tracks']);
                    });
            });
        } 

        //Saving a Track
        saveTrack(){
            let result;
            if(this.track.id)
            result = this._musicService.updateTrack(this.track);
            else   
            result = this._musicService.addTrack(this.track);
            this._router.navigate(['/tracks']);
        }

        //Formating the Track data to Track Object after getting form server
        formatTrack(track):Track{
            let result = new Track();
            result.id = track.id;
            result.title = track.title;
            result.rating = track.rating;
            let genres = [];
            for(let key in track.genres){
                genres.push(track.genres[key].id)
            }
            result.genres = genres;
            return result;
        }
        // Unsubscribe the subscription
        ngOnDestroy(){
            this.trackSubscription.unsubscribe();
        }

}
