import { Component, Input,Output,EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {

  @Input() activeTab:string;

  constructor() { }

  ngOnInit() {
    
  }
  
}
