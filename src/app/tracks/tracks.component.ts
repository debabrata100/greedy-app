import { Component, OnInit } from '@angular/core';
import { MusicService } from '../music.service';

@Component({
  selector: 'app-tracks',
  templateUrl: './tracks.component.html',
  styleUrls: ['./tracks.component.css']
})
export class TracksComponent implements OnInit {

    tab = "tracks";
    tracksLoading: boolean;
    tracks = []; 
    page: number = 1;
  
    constructor(private musicService:MusicService) {}

    ngOnInit() {
        this.loadTracks();
    } 

    //Searching Tracks
    searchTracks(text){
        this.page = 1;
        this.loadTracks({title:text});
    }

    //Event emiited by pagination component
    changePage($event){
        this.page = $event;
        this.loadTracks({page:$event});
    }

    //Getting Tracks from Server based on title or page
    private loadTracks(param?){
        this.tracks = [];
        this.tracksLoading = true;
        this.musicService.getTracks(param)
        .then(res=>{
            this.tracks = res.results;
            this.tracksLoading = false;
            if(res.next)
                this.page +=1; 
        })
    }

}
