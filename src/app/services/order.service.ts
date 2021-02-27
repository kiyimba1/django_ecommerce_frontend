import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  orderApiUrl = environment.apiUrl + 'order';

  constructor(private http: HttpClient) { }

  getOrders(): Observable<any[]>{
    return this.http.get<any>(this.orderApiUrl);
  }
  addOrder(order: any): Observable<any>{
    return this.http.post(this.orderApiUrl, order);
  }
  orderDetails(id: any): Observable<any>{
    return this.http.get(this.orderApiUrl + id);
  }
}
