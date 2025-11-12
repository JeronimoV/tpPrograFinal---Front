import { Component, Input, OnInit } from '@angular/core';
import { UserPhotoAndName } from "../user-photo-and-name/user-photo-and-name";
import { CommonModule, DatePipe } from '@angular/common';
import { Users } from '../../services/users/users';
import { Posts } from '../../services/posts/posts';

@Component({
  selector: 'app-post',
  imports: [UserPhotoAndName, CommonModule, DatePipe],
  templateUrl: './post.html',
  styleUrl: './post.css',
})
export class Post implements OnInit {

  constructor(private usersService : Users, private postService : Posts){}


  @Input() post: any;

  ownPost : boolean = false;

  ngOnInit(): void {
    console.log(this.post);
    
    if(this.post.user._id == this.userData._id){
      this.ownPost = true;
    }
  }

  userData = JSON.parse(localStorage.getItem("data") ?? "{}" );

  darLike(){
    console.log(this.post);
    
    
    if(this.userData == "{}"){
      alert("Debes iniciar sesión para dar me gusta");
    }else{
      this.usersService.darMeGusta({postId: this.post._id, userId: this.userData._id, likes: this.post.likes}).then(res => this.post.liked = true).catch(err => console.log(err));
      this.post.likes +=1;
    }
  }

  quitarLike(){
    this.usersService.quitarMeGusta({postId: this.post._id, userId: this.userData._id , likes: this.post.likes}).then(res => this.post.liked = false).catch(err => console.log(err));
    this.post.likes -= 1;
  }

  async deletePost(){
    const response = await this.postService.borrarPost(this.post._id).then(res => alert("Post Eliminado")).catch(err => console.log(err))
    window.location.reload()
  }

}
