import { Injectable } from '@angular/core';
import axios from 'axios';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class Comments {

  getComments(data : any){
    try {
      const response = axios.get(`${environment.apiUrl}comments/${data.postId}--${data.amount}`)
      return response;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  createComments(data : any){
    try {
      const response = axios.post(`${environment.apiUrl}comments`, data)

      return response;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  editComments(data : any){
    try {
      const response = axios.post(`${environment.apiUrl}comments/edit`, data)

      return response;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  getCommentsByDate(data : any){
    try {
      const response = axios.post(`${environment.apiUrl}comments/commentDate`, data)

      return response;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  getCommentsByPost(data : any){
    try {
      const response = axios.post(`${environment.apiUrl}comments/commentFromPost`, data)

      return response;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
