import { Component, signal } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { NavBar } from './components/nav-bar/nav-bar';
import { TokenAlert } from './components/token-alert/token-alert';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavBar, TokenAlert],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  showNavBar = true;

  constructor(private router : Router){
    this.router.events.subscribe(event => {
      if(event instanceof NavigationEnd){
        this.showNavBar = !["/login", "/register"].includes(event.urlAfterRedirects)
      }
    })
  }
  protected readonly title = signal('front');
}
