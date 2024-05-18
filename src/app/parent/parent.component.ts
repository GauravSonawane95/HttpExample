import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  message:string="";
  mynamechild:string="";
 
  getDataFromChild(data:any){
    this.mynamechild = data;
  }
}
