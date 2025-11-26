import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(): boolean {

    const rawData = localStorage.getItem('data');
    if (!rawData) {
      this.router.navigate(['/login']);
      return false;
    }

    let userData;
    try {
      userData = JSON.parse(rawData);
    } catch (e) {
      localStorage.removeItem('data');
      this.router.navigate(['/login']);
      return false;
    }

    if (userData.admin === true) {
      return true; // ✅ autorizado
    }

    // ❌ no autorizado
    this.router.navigate(['/login']);
    return false;
  }
}