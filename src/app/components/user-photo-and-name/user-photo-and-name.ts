import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-user-photo-and-name',
  imports: [RouterLink],
  templateUrl: './user-photo-and-name.html',
  styleUrl: './user-photo-and-name.css',
})
export class UserPhotoAndName {
  @Input() data : any;
}
