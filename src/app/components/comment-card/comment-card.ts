import { Component, Input, OnInit, signal } from '@angular/core';
import { UserPhotoAndName } from '../user-photo-and-name/user-photo-and-name';
import { FormsModule } from '@angular/forms';
import { Comments } from '../../services/comments/comments';

@Component({
  selector: 'app-comment-card',
  imports: [UserPhotoAndName, FormsModule],
  templateUrl: './comment-card.html',
  styleUrl: './comment-card.css',
})
export class CommentCard implements OnInit{

  constructor(private commentService : Comments){}

  ngOnInit(): void {
    const userData = JSON.parse(localStorage.getItem("data") ?? '{"error": "error"}');
    if(userData._id == this.comment.user._id){
      this.ownComment.set(true);
    }
  }

  @Input() comment : any;

  editing = signal<boolean>(false);
  ownComment = signal<boolean>(false);

  async startEdit(){
    this.editing.set(true)
  }

  async editComent(){
    const response = await this.commentService.editComments({commentId: this.comment._id, newText: this.comment.text}).then(res => this.editing.set(false)).then(res => this.comment.edited = true);
  }
}
