import {Component,Input,Output,EventEmitter} from '@angular/core';
import {OnChanges} from '@angular/core';

@Component({
    selector:'pagination',
    template:`
        <ul class="pagination " *ngIf="next > 1">
            <li [class.disabled] ="previous ==1" >
                <a (click)="goPrevious()" >&laquo;</a>
            </li>
            <li [class.active]="currentPage==previous">
                <a (click)="changePage(previous)" >Page -{{previous}} </a>
            </li>

            <li [class.active]="currentPage==next" >
                <a (click)="changePage(next)" >Page -{{next}}</a>
            </li>

            <li>
            <a (click)="goNext()" >&raquo;</a>
            </li>
        </ul>
    `,
    styles:[`
        ul li{
            cursor: pointer;
        }
    `]
})
export class PaginationComponent implements OnChanges{
    @Input() next: number;
    previous:number;
    currentPage = 1;
     
     @Output() change = new EventEmitter;
    
     ngOnChanges(){
         if(this.next && this.next > 1){
             this.previous = this.next - 1;
         }
         
     }
    changePage(p){
        this.currentPage = p;
        this.change.emit(this.currentPage);
    }
    goNext(){
        this.currentPage ++;
        this.change.emit(this.currentPage);
    }
    goPrevious(){
        if(this.currentPage==1)
            return;
        this.currentPage --;
        this.change.emit(this.currentPage);
    }
}