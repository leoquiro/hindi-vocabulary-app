import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private apiUrl = 'http://localhost:5000/api/categories';

  constructor(private http: HttpClient) { }

  getCategories() {
    return this.http.get<any>(this.apiUrl);
  }
}
