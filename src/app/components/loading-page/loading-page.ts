import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-loading-page',
  imports: [],
  templateUrl: './loading-page.html',
  styleUrl: './loading-page.css',
})
export class LoadingPage {
  @Input() open = true;
}
