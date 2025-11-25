import { Component, OnInit, signal } from '@angular/core';
import { Router } from '@angular/router';
import { Contador } from '../../services/contador';


@Component({
  selector: 'app-token-alert',
  imports: [],
  templateUrl: './token-alert.html',
  styleUrl: './token-alert.css',
})
export class TokenAlert {
mostrarModal = signal(false);
  tiempoRestante = 0;

  constructor(
    private contador: Contador,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.contador.tiempoRestante$.subscribe(t => {
      this.tiempoRestante = t;

      if (t <= 0) {
        this.mostrarModal.set(true);
        console.log("acatoy");
        
      }
    });

    this.contador.iniciarContador();
  }

  cerrarSesion() {
    localStorage.removeItem("data");
    this.router.navigate(['/login']);
  }

  extender() {
    this.mostrarModal.set(false);
    this.contador.reiniciar();
  }
}
