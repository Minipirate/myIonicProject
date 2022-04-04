import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModelCours } from '../cours/model';

const url = 'http://localhost:3000/cours';

@Injectable({
  providedIn: 'root'
})

export class ApicoursService {

  constructor(private http: HttpClient) { }

  public findAll(): Observable<ModelCours[]> {
    return this.http.get<ModelCours[]>(url);
  }

  public add(c: ModelCours): Observable<ModelCours> {
    return this.http.post<ModelCours>(url, c);
  }

  public update(c: ModelCours): Observable<ModelCours> {
    return this.http.put<ModelCours>(url + '/' + c.id, c);
  }

  public delete(c: ModelCours): Observable<ModelCours> {
    return this.http.delete<ModelCours>(url + '/' + c.id);
  }
}

