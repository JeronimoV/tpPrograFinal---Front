import { Component, Input } from '@angular/core';
import { Authentication } from '../../services/authentication/authentication';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-second-step-register',
  imports: [FormsModule],
  templateUrl: './second-step-register.html',
  styleUrl: './second-step-register.css',
})
export class SecondStepRegister {

  @Input() email! : string;
  @Input() password! : string;

  data = {
    image : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
    email: "",
    password: "",
    name : "",
    surname : "",
    userName : "",
    fechaNacimiento : "",
    descripcion : "",
  }

  error : { [key: string]: string } = {
    image : "",
    email: "",
    password: "",
    name : "",
    surname : "",
    userName : "",
    fechaNacimiento : "",
    descripcion : "",
  }

  constructor(private auth : Authentication, private router : Router){}

  async selectedPhoto(event : any){   

    const formData = new FormData();
    formData.append("image", event.target.files[0])
    const result = await this.auth.uploadPhoto(formData);
    this.data.image = result.data.url;
  }

  verificarExistenciaDatos(){
    let faltanDatos = false;
    Object.entries(this.data).forEach((key, index) => {
      if(key[1].trim() == "") {
        this.error[key[0]] = "Campo obligatorio. Rellenar";
        faltanDatos = true;
      }
    })
    return faltanDatos;
  }


  async registrarUsuario(event : any){
    event.preventDefault();
    
    this.data.email = this.email;
    this.data.password = this.password;
    if(!this.verificarExistenciaDatos()){
      await this.auth.registerUser(this.data).then(res => localStorage.setItem("data", res.data)).then(res => this.router.navigate(["/"])).catch(err => alert(err.response.data.message));
    }
  }
}
