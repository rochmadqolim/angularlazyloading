import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  baseUrl = environment.domain;

  constructor(private http: HttpClient) {}
  getAll(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/get-product`);
  }

  create(product: any): Observable<any[]> {
    return this.http.post<any[]>(`${this.baseUrl}/create-product`, product);
  }
}
