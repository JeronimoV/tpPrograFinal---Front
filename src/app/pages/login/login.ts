import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Authentication } from '../../services/authentication/authentication';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  constructor(private authentication : Authentication){}

  email = "";
  password = "";

  async loguearUsuario(){
    console.log(this.email, this.password);
    
    const response = await this.authentication.loginUser({email: this.email, password: this.password})
    console.log(response);
    
  }
}
