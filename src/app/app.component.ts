import { Component } from '@angular/core';
import { CustomerService } from './services/customer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'customerFrontAngular';

  ngOnInit() {
    this.customerService.getCustomers().subscribe((responce) => {
      console.log(responce);
    });
  }

  constructor(private customerService: CustomerService) {}
}
