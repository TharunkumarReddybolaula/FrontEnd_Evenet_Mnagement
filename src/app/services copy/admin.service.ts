import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

export interface Administrator {
  adminId?: number;
  name: string;
  email: string;
  phone: string;
  userId?: number;
}

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private baseUrl = 'http://localhost:5070/api/Admin';  // Base URL for the Admin API

  constructor(private http: HttpClient) { }

  // Add an administrator with username and password as query parameters
  addAdmin(admin: Administrator, username: string, password: string): Observable<any> {
    const params = new HttpParams()
      .set('username', username)
      .set('password', password);

    return this.http.post<any>(`${this.baseUrl}/Administrators/Add`, admin, { params })
      .pipe(catchError(this.handleError)); // Error handling
  }

  // Get all administrators
  getAllAdmins(): Observable<Administrator[]> {
    return this.http.get<Administrator[]>(`${this.baseUrl}/Administrators`) // Correct endpoint
      .pipe(catchError(this.handleError)); // Error handling
  }

  private handleError(error: any): Observable<never> {
    console.error('Error occurred:', error);
    throw error; // Rethrow the error
  }
}
