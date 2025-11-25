import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contador } from '../../services/contador';


@Component({
  selector: 'app-token-alert',
  imports: [],
  templateUrl: './token-alert.html',
  styleUrl: './token-alert.css',
})
export class TokenAlert {
mostrarModal = false;
  tiempoRestante = 0;

  constructor(
    private contador: Contador,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.contador.tiempoRestante$.subscribe(t => {
      this.tiempoRestante = t;

      if (t <= 0) {
        this.mostrarModal = true;
      }
    });

    this.contador.iniciarContador();
  }

  cerrarSesion() {
    localStorage.removeItem("data");
    this.router.navigate(['/login']);
  }

  extender() {
    this.mostrarModal = false;
    this.contador.reiniciar();
  }
}
