import { Component } from '@angular/core';
import { CustomerService } from './services/customer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'customerFrontAngular';
  http: any; //------------------------------------------------
  values: any; //----------------------------------------------

  ngOnInit() {
    this.customerService.getCustomers().subscribe((responce) => {
      console.log(responce);
    });
  }

  getCustFromBack() {
    this.http.get('http://localhost:8080/').subscribe((data: any) => {
      console.log(data);
      this.values = data;
    });
  }

  constructor(private customerService: CustomerService) {}
}
