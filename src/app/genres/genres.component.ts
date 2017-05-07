import { Component, OnInit } from '@angular/core';
import { MusicService } from '../music.service';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.css']
})
export class GenresComponent implements OnInit {

    tab = "genres";
    genresLoading: boolean;
    genres = [];
    page: number = 1;

    constructor(
      private musicService:MusicService
    ) { }

    ngOnInit() {
      this.loadGenres();
    } 

  //Event emiited by pagination component
    changePage($event){
        this.page = $event;
        this.loadGenres({page:$event});
    }
    //Loading Genres here
    private loadGenres(param?){
        this.genres =[];
        this.genresLoading = true;
        this.musicService.getGenres(param)
        .then(res=>{
            this.genres = res.results;
            this.genresLoading = false;
            if(res.next)
                this.page +=1;
        })
    }
}
