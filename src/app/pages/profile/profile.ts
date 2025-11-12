import { Component, OnInit, signal } from '@angular/core';
import { Post } from '../../components/post/post';
import { Posts } from '../../services/posts/posts';
import { Users } from '../../services/users/users';

@Component({
  selector: 'app-profile',
  imports: [Post],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile implements OnInit {
  posts = signal([]);

  userData = signal({_id: "", surname: "", name: "", image: "", descripcion: "", userName: ""});

  constructor(private postService: Posts, private userServices : Users){}

  async ngOnInit() {
    console.log(window.location.search.split("=")[1]);
    

    await this.userServices.obtenerUserData(window.location.search.split("=")[1]).then(res => this.userData.set(res.data))
    
    await this.postService.obtenerUsersPosts(this.userData()._id).then((res) => this.posts.set(res.data))
    
  }
} 
