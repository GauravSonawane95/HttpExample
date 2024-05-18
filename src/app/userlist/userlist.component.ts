import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ServiceService } from '../service/service.service';
@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
List:userdetails[]=[]
constructor(private Service:ServiceService){

}

ngOnInit(): void {
  this.getUserList();
}

getUserList() {
 this.Service.getData("users").subscribe((response: any) => {
   if (response && response.length > 0) {
     this.List = response;
   }
 },
   error => {

   })
}

deleteItem(id: number): void {
  this.Service.deleteItem(id).subscribe(
    response => {
      console.log('Item deleted successfully', response);
    },
    error => {
      console.error('Error deleting item', error);
    }
  );
}

}
export interface userdetails{
  id:number
name:string
mobile:number
email:string
gender:string  
}
