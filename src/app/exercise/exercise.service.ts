import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExerciseService {
private apiUrl = 'http://localhost:5000/api/random-word';

  constructor(private http: HttpClient) { }

  getWord(category: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}?category=${category}`);
  }
}
