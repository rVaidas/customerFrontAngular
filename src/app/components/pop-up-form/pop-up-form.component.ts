import { Component, Inject, OnInit } from '@angular/core';
import { Customer } from 'src/app/interface/server';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-pop-up-form',
  templateUrl: './pop-up-form.component.html',
  styleUrls: ['./pop-up-form.component.css'],
})

/*export class PopUpFormComponent implements OnInit {
  customer: Customer = new Customer();*/
export class PopUpFormComponent implements OnInit {
  customer!: Customer;
  display: boolean = false;

  constructor(private customerService: CustomerService) {}
  // ngOnInit(): void {}
  ngOnInit(): void {}

  addCustomer(): void {
    this.customerService.addCustomer(this.customer).subscribe((responce) => {
      alert(responce);
    });
  }

  showDialog() {
    this.display = true;
  }
}
