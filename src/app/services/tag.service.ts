import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// tslint:disable-next-line:import-spacing
import { environment } from  '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class TagService {
  tagUrl = environment.apiUrl + 'tag';

  constructor(private http: HttpClient) { }
  getTags(): Observable<any[]> {
    return this.http.get<any[]>(this.tagUrl);
  }
}
