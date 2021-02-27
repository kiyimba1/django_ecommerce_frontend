import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productUrl = environment.apiUrl + 'product';

  constructor(private http: HttpClient) { }
  getProducts(): Observable<any[]>{
    return this.http.get<any[]>(this.productUrl);
  }

  getProductDetails(productId): Observable<any>{
    return this.http.get<any>(this.productUrl + productId);
  }
}
