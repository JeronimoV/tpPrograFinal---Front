import { Component, Input } from '@angular/core';
import { UserPhotoAndName } from '../../user-photo-and-name/user-photo-and-name';
import { Admin } from '../../../services/admin/admin';

@Component({
  selector: 'app-users-card',
  imports: [UserPhotoAndName],
  templateUrl: './users-card.html',
  styleUrl: './users-card.css',
})
export class UsersCard {

  constructor(private adminService : Admin){}

  @Input() user : any;

  async darDeBaja(){
    await this.adminService.deleteUser(this.user._id).then(res => this.user.userEnabled = false)
  }

   async darDeAlta(){
    await this.adminService.enableUser(this.user._id).then(res => this.user.userEnabled = true)
  }
}
