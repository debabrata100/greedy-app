import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

//components
import { TabsComponent } from './tabs.component';
import { SpinnerComponent } from './spinner.component';
import { PaginationComponent } from './pagination.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    TabsComponent,
    SpinnerComponent,
    PaginationComponent
  ],
  exports:[
    TabsComponent,
    SpinnerComponent,
    PaginationComponent
  ]
})
export class SharedModule { }
