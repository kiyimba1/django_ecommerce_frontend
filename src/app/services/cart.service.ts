import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartUrl = environment.apiUrl + 'cart';

  constructor(private http: HttpClient) { }

  getCart(): Observable<any>{
    return this.http.get<any[]>(this.cartUrl);
  }
  addItemToCart(item: any): Observable<any>{
    return this.http.post(this.cartUrl, item);
  }

  // tslint:disable-next-line:typedef
  deleteCartItem(id: any){
    return this.http.delete(this.cartUrl + id);
  }
}
