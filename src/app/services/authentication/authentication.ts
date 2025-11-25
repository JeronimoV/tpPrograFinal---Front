import { Injectable } from '@angular/core';
import axios from 'axios';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class Authentication {
  loginUser(data: any) {
    try {
      const response = axios.post(`${environment.apiUrl}authentication`, data);
      console.log('response: ' + response);

      return response;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  registerUser(data: any) {
    try {
      console.log(data);

      const response = axios.post(`${environment.apiUrl}users`, data);
      return response;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  uploadPhoto(data: any) {
    try {
      console.log(data);

      const response = axios.post(`${environment.apiUrl}cloudinary`, data);
      return response;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  verifyToken(data: any) {
    try {
      console.log(data);

      const response = axios.get(`${environment.apiUrl}authentication`, {
        headers: {
          "Authorization": data,
        },
      });
      return response;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
