import { Component, OnInit, Signal, signal } from '@angular/core';
import { Post } from '../../components/post/post';
import { Posts } from '../../services/posts/posts';

@Component({
  selector: 'app-profile',
  imports: [Post],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile implements OnInit {
  posts = signal([]);

  userData = JSON.parse(localStorage.getItem("data") ?? "{}");

  constructor(private postService: Posts){}

  async ngOnInit() {
    await this.postService.obtenerUsersPosts(this.userData._id).then((res) => this.posts.set(res.data))
    console.log(this.userData);
    
  }
} 
