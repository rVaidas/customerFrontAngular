import { Component, OnInit } from '@angular/core';
import { Customer } from './interface/server';
import { CustomerService } from './services/customer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'customerFrontAngular';
  customers: Customer[] = [];

  constructor(private customerService: CustomerService) {}

  ngOnInit() {
    this.customerService.getCustomers().subscribe((responce) => {
      console.log(responce);
      this.customers = responce;
    });
  }

  /* addCustomer(customer: Customer): void {
    this.customerService.addCustomer(customer);
  }*/
}
