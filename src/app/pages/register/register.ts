import { Component } from '@angular/core';
import { SecondStepRegister } from '../../components/second-step-register/second-step-register';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [SecondStepRegister, FormsModule, RouterLink],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  nextStep = false;
  email = "";
  password = "";
  password2 = "";

  error = {
    email: "",
    password: "",
    password2: ""
  }

  verificarErrores(){
    console.log("entre papus");
    
    if(this.password != this.password2){
      this.error.password2 = "Las contraseñas no coinciden"
    }else{
      this.error.password2 = "";
    }
  }


  selectNextStep(event : any){
    event.preventDefault()
    this.email.trim() === "" ? this.error.email = "Campo Obligatorio. Rellenar" : this.error.email = "";
    this.password.trim() === "" ? this.error.password = "Campo Obligatorio. Rellenar" : this.error.password = "";
    this.password2.trim() === "" ? this.error.password2 = "Campo Obligatorio. Rellenar" : this.error.password2 = "";
    const rgx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    rgx.test(this.email) == false ? this.error.email = "Formato de email erroneo" : this.error.email = "";
    this.verificarErrores();
    if(this.error.email == "" && this.error.password == "" && this.error.password2 == ""){
      this.nextStep = true;
      
    }
  }
}
