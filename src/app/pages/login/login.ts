import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Authentication } from '../../services/authentication/authentication';
import { Router, RouterLink } from '@angular/router';
import swal from 'sweetalert';

@Component({
  selector: 'app-login',
  imports: [FormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  constructor(private authentication : Authentication, private router : Router){}

  email = "";
  password = "";

  async loguearUsuario(){
    console.log(this.email, this.password);
    
    await this.authentication.loginUser({email: this.email, password: this.password}).then(res => localStorage.setItem("data", JSON.stringify(res.data))).then(res => this.router.navigate(["/"])).catch(err => swal(err.response.data.message));
    
  }
}
