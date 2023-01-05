import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import decode from 'jwt-decode';
import { HttpClient } from '@angular/common/http';

const baseUrl = 'http://localhost:5000/api/user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  isUserLogged = new Subject<boolean>();
  searchQuery = new Subject<string>();
  cartStatus = new Subject<string>();

  constructor(private http: HttpClient) { }
  saveSession(token: any): void {
    localStorage.setItem('token', token);
  }

  clearSession(): void {
    localStorage.clear();
  }

  getProfile(): any {
    try {
      const decoded: any = decode(this.getToken());
      return decoded.user;
    } catch (err) {
      return {};
    }
  }

  isLoggedIn(): boolean {
    try {
      const decoded: any = decode(this.getToken());
      if (decoded.exp > Date.now() / 1000) {
        return true;
      }
      return false;
    } catch (err) {
      return false;
    }
  }

  getRole(): string {
    try {
      const decoded: any = decode(this.getToken());
      return decoded.user.role;
    } catch (err) {
      return '';
    }
  }

  getToken(): string {
    return localStorage.getItem('token') || '';
  }

  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  login(payload: object): Observable<any> {
    return this.http.post(`${baseUrl}/login`, payload);
  }

  logout() {
    this.isUserLogged.next(false);
    localStorage.removeItem('token');
  }
}
