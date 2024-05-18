import { Component } from '@angular/core';
import { EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  myname:string="";
   
  @Output()
  emitChild:EventEmitter<string> = new EventEmitter();

  sendit(){
    this.emitChild.emit(this.myname);
  }

}
