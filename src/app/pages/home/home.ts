import { ChangeDetectorRef, Component, OnInit, signal } from '@angular/core';
import { Chat } from '../../components/chat/chat';
import { Post } from '../../components/post/post';
import { UserPhotoAndName } from '../../components/user-photo-and-name/user-photo-and-name';
import { FormsModule } from '@angular/forms';
import { getImageURL } from '../../utils/gestionFotos.utils';
import { Authentication } from '../../services/authentication/authentication';
import { Posts } from '../../services/posts/posts';
import { CommonModule } from '@angular/common';
import { Users } from '../../services/users/users';
import { LoadingPage } from '../../components/loading-page/loading-page';
import { verificarToken } from '../../utils/authorization.utils';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [Chat, Post, UserPhotoAndName, FormsModule, CommonModule, LoadingPage],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
  constructor(
    private auth: Authentication,
    private postService: Posts,
    private usersService: Users,
    private router : Router
  ) {}

  loading = signal(true);

  stateImage: String = '📸';

  copiaPosts = signal<any>([]);

  posts = signal<any>([]);

  postPaginado = signal<any>([]);

  pageNumber = signal(0);

  likes: any[] = [];

  userData = JSON.parse(localStorage.getItem('data') ?? '{"error": "Sin datos"}');

  text: string = '';
  images: [string, string, string] = ['', '', ''];

  async ngOnInit() {

    let response = await verificarToken(this.auth, this.router);
    this.loading.set(response);
    console.log(response + "acaaaacaca");
    

    await this.postService
      .obtenerPosts(this.userData._id)
      .then((res) => this.posts.set(res.data))
      .then((res) => console.log(this.posts()));

    this.copiaPosts.set(this.posts());

    this.paginado(0);

    if(this.userData.error == undefined){
      await this.getLikes();
      await this.verificarLike();
    }
  }

  async getLikes() {
    if (this.userData.error != undefined) {
      const response = await this.usersService.getLikes(this.userData._id);
      this.likes = response.data.likes;
    }
  }

  async verificarLike() {
    let newPost: any[] = [...this.posts()];
    for (let i = 0; i < newPost.length; i++) {
      console.log(newPost);

      newPost[i].forEach((el: any) => {
        const response = this.likes.find((like) => like == el._id);

        response != undefined ? (el.liked = true) : (el.liked = false);
      });
    }

    console.log(newPost);

    this.posts.set(newPost);
  }

  async selectedPhoto(event: any) {
    //Hay que agregar que espere a que suba la imagen
    try {
      if (this.images[2] == '') {
        this.images.pop();
        const promiseURL = getImageURL(event, this.auth);

        this.stateImage = '...';

        let response = await promiseURL;

        this.images.unshift(response);
        this.stateImage = '📸';
      }
    } catch (error: any) {
      swal(error.message);
    }
  }

  async createPost() {
    const response = await this.postService.subirPost({
      user: this.userData._id,
      text: this.text,
      images: this.images,
    });
    let postAuxiliar = [...this.postPaginado()];
    postAuxiliar.unshift(response.data);

    let postAuxiliar2 = [...this.posts()];
    postAuxiliar2[0].unshift(response.data);

    this.postPaginado.set(postAuxiliar);
    this.posts.set(postAuxiliar2)

    this.text = '';
    this.images = ['', '', ''];
  }

  paginado(page: number) {
    console.log(page);

    this.pageNumber.set(page);
    this.postPaginado.set(this.posts()[page]);
  }

  paginaSiguiente() {
    this.pageNumber() < this.posts().length - 1 ? this.paginado(this.pageNumber() + 1) : null;
  }

  paginaAnterior() {
    this.pageNumber() > 0 ? this.paginado(this.pageNumber() - 1) : null;
  }

  async ordenarPorMeGusta() {
    let newPosts: any[] = [];
    for (let i = 0; i < this.posts().length; i++) {
      for (let j = 0; j < this.posts()[i].length; j++) {
        newPosts.push(this.posts()[i][j]);
      }
    }

    newPosts.sort((a, b) => b.likes - a.likes);

    let allPosts: any[] = [];
    let arrayAuxiliar: any[] = [];
    let contador = 0;
    for (let i = 0; i < newPosts.length; i++) {
      arrayAuxiliar.push(newPosts[i]);
      contador++;
      if (contador > 1) {
        contador = 0;
        allPosts.push(arrayAuxiliar);
        arrayAuxiliar = [];
      }
    }
    
    this.posts.set(allPosts);
    this.postPaginado.set(this.posts()[this.pageNumber()])
  }

  ordenarPorFecha(){
    console.log(this.copiaPosts);
    
    this.posts.set(this.copiaPosts());
    this.postPaginado.set(this.posts()[this.pageNumber()])
  }
}
