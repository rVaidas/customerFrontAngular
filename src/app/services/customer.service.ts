import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../interface/server';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  constructor(private http: HttpClient) {}

  getCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>('/api/v1/customer');
  }

  addCustomer(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>('/api/v1/customer', customer);
  }
}
