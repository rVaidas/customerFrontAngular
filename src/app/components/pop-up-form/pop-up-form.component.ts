import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Customer } from 'src/app/interface/server';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-pop-up-form',
  templateUrl: './pop-up-form.component.html',
  styleUrls: ['./pop-up-form.component.css'],
})

/*export class PopUpFormComponent implements OnInit {
  customer: Customer = new Customer();*/

// export class PopUpFormComponent implements OnInit {
//   customer!: Customer;
//   display: boolean = false;
export class PopUpFormComponent implements OnInit {
  customerForm!: FormGroup;
  @Input()
  display: boolean = false;
  customers: Customer[] | undefined;

  constructor(private customerService: CustomerService) {}

  ngOnInit(): void {
    this.customerForm = new FormGroup({
      name: new FormControl(),
      surname: new FormControl(),
      birthDate: new FormControl(),
      telNumber: new FormControl(),
      email: new FormControl(),
    });
  }

  // addCustomer(): void {
  //   this.customerService.addCustomer(this.customer).subscribe((responce) => {
  //     alert(responce);
  //   });
  // }

  refreshCustomers() {
    this.customerService.getCustomers().subscribe((responce) => {
      console.log(responce);
      this.customers = responce;
    });
  }

  onSubmit(): void {
    this.refreshCustomers();
    this.customerService
      .addCustomer(this.customerForm.value)
      .subscribe((responce) => {
        // console.log(responce);
        alert(
          'Customer ' +
            responce.name +
            ' ' +
            responce.surname +
            ' added successfully'
        );
        this.display = false;
      });
  }

  // showDialog() {
  //   this.display = true;
  // }
}
