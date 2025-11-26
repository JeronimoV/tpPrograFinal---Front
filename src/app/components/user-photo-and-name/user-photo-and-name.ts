import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NombreUsuarioPipe } from '../../pipes/nombreUsuario/nombre-usuario-pipe';

@Component({
  selector: 'app-user-photo-and-name',
  imports: [RouterLink, NombreUsuarioPipe],
  templateUrl: './user-photo-and-name.html',
  styleUrl: './user-photo-and-name.css',
})
export class UserPhotoAndName{
  @Input() data : any;

}
