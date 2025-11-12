import { Injectable } from '@angular/core';
import axios from 'axios';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class Posts {
  subirPost(data : any){
      const response = axios.post(`${environment.apiUrl}posts`, data);
      return response;
  }

  obtenerPosts(id : String){
    const response = axios.get(`${environment.apiUrl}posts`);
    return response;
  }

  obtenerUsersPosts(id : String){
    const response = axios.get(`${environment.apiUrl}posts/${id}`);
    return response;
  }

  borrarPost(id : String){
    const response = axios.delete(`${environment.apiUrl}posts/${id}`);
    return response;
  }
}
