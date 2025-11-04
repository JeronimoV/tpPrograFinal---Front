import { Component } from '@angular/core';
import { UserPhotoAndName } from "../user-photo-and-name/user-photo-and-name";

@Component({
  selector: 'app-post',
  imports: [UserPhotoAndName],
  templateUrl: './post.html',
  styleUrl: './post.css',
})
export class Post {

}
