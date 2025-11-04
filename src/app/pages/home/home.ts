import { Component } from '@angular/core';
import { Chat } from '../../components/chat/chat';
import { Post } from '../../components/post/post';

@Component({
  selector: 'app-home',
  imports: [Chat, Post],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
