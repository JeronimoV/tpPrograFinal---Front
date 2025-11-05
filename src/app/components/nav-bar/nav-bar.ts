import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  imports: [RouterLink],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.css',
})
export class NavBar implements OnInit{
  data : any

  ngOnInit(): void {
    const local = localStorage.getItem("data")
    
    if(local == null){
      this.data = {userName: "Error", image: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"}
      console.log("Entre aca");
      
    }else{
      this.data = JSON.parse(local);
      console.log(this.data.userName);
      
    }
  }
}
