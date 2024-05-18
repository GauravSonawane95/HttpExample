import { ServiceService } from '../service/service.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  GetUserForm!:FormGroup
  constructor(private FormBuild:FormBuilder,private route:Router,private https:ServiceService){

  }
  ngOnInit(): void {
    this.UserData()  
  }
UserData(){
  this.GetUserForm=this.FormBuild.group({
  "name":["",[Validators.required]],
  "mobile":["",[Validators.required]],
  "email":["",[Validators.required]],
  "gender":["",[Validators.required]],
})
}
submit(){
  console.log(this.GetUserForm.value);

  this.https.saveToServer("users",this.GetUserForm.value).subscribe((el:any)=>{
     console.log(el);
  }) 
}

navigateTo(){
  this.route.navigate(['/list']);
}
}

