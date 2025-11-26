import { Injectable } from '@angular/core';
import axios from 'axios';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class Admin {
  getUserList(){
    try {
      const response = axios.get(`${environment.apiUrl}admin`);
      console.log('response: ' + response);

      return response;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  deleteUser(id : string){
    try {
      const response = axios.delete(`${environment.apiUrl}admin/${id}`);
      console.log('response: ' + response);

      return response;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  enableUser(id : string){
    try {
      const response = axios.post(`${environment.apiUrl}admin/${id}`);
      console.log('response: ' + response);

      return response;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
