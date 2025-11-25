import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UserPhotoAndName } from '../user-photo-and-name/user-photo-and-name';

@Component({
  selector: 'app-nav-bar',
  imports: [RouterLink, UserPhotoAndName],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.css',
})
export class NavBar{
  userData = JSON.parse(localStorage.getItem("data") ?? '{"image":"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png", "name": "Inicie", "surname": "sesion", "error": "error"}');

  cerrarSesion(){
    localStorage.clear();
    window.location.href = "http://localhost:4200/login"
  }
}
