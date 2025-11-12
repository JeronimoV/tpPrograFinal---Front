import { Injectable } from '@angular/core';
import axios from 'axios';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class Users {
  darMeGusta(data: any){
    const response = axios.post(`${environment.apiUrl}users/like`, data);
    return response;  
  }

  quitarMeGusta(data: any){
    const response = axios.post(`${environment.apiUrl}users/dislike`, data);
    return response;  
  }

  getLikes(id: any){
    const response = axios.get(`${environment.apiUrl}users/getLikes/${id}`);
    return response;
  }
}
