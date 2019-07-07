import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from './../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OperadorService {

  private readonly API = `${environment.API}/operador`;

  constructor(private http: HttpClient) { }

  getOperador(id: number): Observable<Object> {
    return this.http.get(`${this.API}/${id}`);
  }

  createOperador(employee: Object): Observable<Object> {
    return this.http.post(`${this.API}`, employee);
  }

  updateOperador(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.API}/${id}`, value);
  }

  deleteOperador(id: number): Observable<any> {
    return this.http.delete(`${this.API}/${id}`, { responseType: 'text' });
  }

  getOperadoresList(): Observable<any> {
    return this.http.get(`${this.API}`);
  }
}
