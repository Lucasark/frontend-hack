import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private readonly API = `${environment.API}/operador`;

  constructor(private http: HttpClient) { }

  getOperador(id: number): Observable<Object> {
    return this.http.get(`${this.API}/${id}`);
  }

  updateOperador(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.API}/${id}`, value);
  }

}
