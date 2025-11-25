import { Injectable } from '@angular/core';
import { BehaviorSubject, interval, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Contador {
    private tiempoRestante = new BehaviorSubject<number>(60); // 10 min en segundos
  tiempoRestante$ = this.tiempoRestante.asObservable();

  private timerSub!: Subscription;

  iniciarContador() {
    this.detener();
    this.timerSub = interval(1000).subscribe(() => {
      const t = this.tiempoRestante.value - 1;
      this.tiempoRestante.next(t);

      if (t <= 0) {
        this.detener();
      }
    });
  }

  reiniciar() {
    this.tiempoRestante.next(600);
    this.iniciarContador();
  }

  detener() {
    if (this.timerSub) {
      this.timerSub.unsubscribe();
    }
  }

}
