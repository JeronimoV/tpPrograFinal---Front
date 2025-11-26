import { Component, OnInit, signal } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { NavBar } from './components/nav-bar/nav-bar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavBar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {

  showNavBar = true;

  userData = JSON.parse(localStorage.getItem('data') ?? '{"error": "Sin datos"}');

  constructor(private router : Router){
    this.router.events.subscribe(event => {
      if(event instanceof NavigationEnd){
        this.showNavBar = !["/login", "/register"].includes(event.urlAfterRedirects)
      }
    })
  }

  ngOnInit(): void {
    if(this.userData.error == undefined && this.userData.userEnabled == false){
      localStorage.clear();
      this.router.navigate(["/login"])
    }
  }


  protected readonly title = signal('front');
}
