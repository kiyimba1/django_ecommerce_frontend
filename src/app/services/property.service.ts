import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {
  propertyUrl = environment.apiUrl + 'property';

  constructor(private http: HttpClient) { }

  getProperty(): Observable<any[]>{
    return this.http.get<any[]>(this.propertyUrl);
  }
}
