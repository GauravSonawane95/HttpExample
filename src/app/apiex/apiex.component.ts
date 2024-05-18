import { Component } from '@angular/core';
import { ServicesService } from '../apiservece/services.service';
@Component({
  selector: 'app-apiex',
  templateUrl: './apiex.component.html',
  styleUrls: ['./apiex.component.css']
})
export class ApiexComponent {
  data: any;

  constructor(private apiService: ServicesService) { }

  ngOnInit(): void {
    this.apiService.getData().subscribe(
      response => {
        this.data = response;
      },
      error => {
        console.error('Error fetching data', error);
      }
    );
  }
}
