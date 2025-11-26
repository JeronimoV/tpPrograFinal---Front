import { Component, Input, OnInit, signal } from '@angular/core';
import { UserPhotoAndName } from "../user-photo-and-name/user-photo-and-name";
import { CommonModule, DatePipe } from '@angular/common';
import { Users } from '../../services/users/users';
import { Posts } from '../../services/posts/posts';
import { CommentCard } from '../comment-card/comment-card';
import { FormsModule } from '@angular/forms';
import { Comments } from '../../services/comments/comments';

@Component({
  selector: 'app-post',
  imports: [UserPhotoAndName, CommonModule, DatePipe, CommentCard, FormsModule],
  templateUrl: './post.html',
  styleUrl: './post.css',
})
export class Post implements OnInit {

  constructor(private usersService : Users, private postService : Posts, private commentsService : Comments){}


  @Input() post: any;
  @Input() adminOptions : boolean = false;

  ownPost : boolean = false;

  text : string = ""

  opened : boolean = false;

  comentarios = signal<any>([]);

  commentAmount : number = 1;

  ngOnInit(): void {
    
    if(this.post.user._id == this.userData._id){
      this.ownPost = true;
    }

    this.getComments();
  }

  userData = JSON.parse(localStorage.getItem("data") ?? '{"error": "error"}' );

  darLike(){
    
    if(this.userData.error != undefined){
      swal("Debes iniciar sesión para dar me gusta");
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
    const response = await this.postService.borrarPost(this.post._id).then(res => swal("Post Eliminado")).catch(err => console.log(err))
    window.location.reload()
  }

  abrirPost(){
    this.opened = true;
  }

  cerrarPost(){
    this.opened = false;
  }

  async createComment() {
    const response = await this.commentsService.createComments({
      user: this.userData._id,
      text: this.text,
      post: this.post._id
    });
    let comentariosAuxiliar = [...this.comentarios()];
    comentariosAuxiliar.unshift(response.data);

    this.comentarios.set(comentariosAuxiliar);

    this.text = '';
  }

  async getComments(){
    const response = await this.commentsService.getComments({"postId": this.post._id, "amount": this.commentAmount});
    this.comentarios.set(response.data);
  }

  async getMoreComments(){
    this.commentAmount++;
    this.getComments()
  }

}
