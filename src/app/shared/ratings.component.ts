import { Component, Input, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-ratings',
  templateUrl: './ratings.component.html',
  styleUrls: ['./ratings.component.css']
})
export class RatingsComponent implements OnInit, OnChanges {
  @Input() ratings = 0;
  fullStar = [];
  emptyStar = [];

  constructor() { }
  ngOnChanges(){
      let fullStarLength = this.ratings >= 5 ? 5: Math.round(this.ratings);
      let emptyStarLength = 5 - fullStarLength;

      for(let i=0;i < fullStarLength; i++){
          this.fullStar.push(i);
      }
      for(let i=0;i < emptyStarLength; i++){
          this.emptyStar.push(i);
      }
  }

  ngOnInit() {

  }

}
