import { Injectable } from '@angular/core';
import axios from "axios"

@Injectable({
  providedIn: 'root'
})
export class Authentication {
  async loginUser(data : any){
    try {
      const response = await axios.post("http://localhost:3000/authentication", data)
      return response;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async registerUser(data : any){
    try {
      console.log(data);
      
      const response = await axios.post("http://localhost:3000/users", data)
      return response;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async uploadPhoto(data : any){
    try {
      console.log(data);
      
      const response = await axios.post("http://localhost:3000/cloudinary", data)
      return response;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
