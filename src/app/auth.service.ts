import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface SignInRequest {
  username: string;
  password: string;
  role: string;
}

export interface SignInResponse {
  message: string;
  token: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:5070/api/auth';
  private tokenKey = 'token';

  constructor(private http: HttpClient) {}

  signin(request: SignInRequest): Observable<SignInResponse> {
    return this.http.post<SignInResponse>(`${this.apiUrl}/signin`, request);
  }

  saveToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  logout(): void {
    localStorage.removeItem(this.tokenKey);
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }

  /**
   * Decodes JWT token and returns user object
   * Assumes JWT has structure: { id, username, role, ... }
   */
  getCurrentUser(): any | null {
    const token = this.getToken();
    if (!token) return null;

    try {
      const payloadBase64 = token.split('.')[1];
      const payloadJson = atob(payloadBase64);
      const payload = JSON.parse(payloadJson);
      return payload;
    } catch (error) {
      console.error('Failed to decode JWT:', error);
      return null;
    }
  }
}
