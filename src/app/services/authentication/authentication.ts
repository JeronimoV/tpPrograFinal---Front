import { Injectable } from '@angular/core';
import axios from "axios"
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class Authentication {
  async loginUser(data : any){
    try {
      const response = await axios.post(`${environment.apiUrl}authentication`, data)
      console.log("response: " + response);
      
      return response;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async registerUser(data : any){
    try {
      console.log(data);
      
      const response = await axios.post(`${environment.apiUrl}users`, data)
      return response;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async uploadPhoto(data : any){
    try {
      console.log(data);
      
      const response = await axios.post(`${environment.apiUrl}cloudinary`, data)
      return response;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
