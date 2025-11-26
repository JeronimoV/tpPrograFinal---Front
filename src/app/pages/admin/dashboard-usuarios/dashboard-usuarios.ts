import { Component, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SecondStepRegister } from '../../../components/second-step-register/second-step-register';
import { Admin } from '../../../services/admin/admin';
import { UsersCard } from '../../../components/admin/users-card/users-card';

@Component({
  selector: 'app-dashboard-usuarios',
  imports: [FormsModule, SecondStepRegister, UsersCard],
  templateUrl: './dashboard-usuarios.html',
  styleUrl: './dashboard-usuarios.css',
})
export class DashboardUsuarios implements OnInit {

  constructor(private adminService : Admin){}

  users = signal([]);

  nextStep = false;

  admin = '';
  email = '';
  password = '';
  password2 = '';

  error = {
    email: '',
    password: '',
    password2: '',
    admin: '',
  };

  async ngOnInit() {
    await this.adminService.getUserList().then(res => this.users.set(res.data));
    console.log(this.users());
    
  }

  verificarErrores() {
    console.log('entre papus');

    if (this.password != this.password2) {
      this.error.password2 = 'Las contraseñas no coinciden';
    } else {
      this.error.password2 = '';
    }
  }

  selectNextStep(event: any) {
    event.preventDefault();
    this.email.trim() === ''
      ? (this.error.email = 'Campo Obligatorio. Rellenar')
      : (this.error.email = '');
    this.password.trim() === ''
      ? (this.error.password = 'Campo Obligatorio. Rellenar')
      : (this.error.password = '');
    this.password2.trim() === ''
      ? (this.error.password2 = 'Campo Obligatorio. Rellenar')
      : (this.error.password2 = '');
    this.admin.trim() === ''
      ? (this.error.admin = 'Campo Obligatorio. Selecciona una opcion')
      : (this.error.admin = '');
    const rgx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    rgx.test(this.email) == false
      ? (this.error.email = 'Formato de email erroneo')
      : (this.error.email = '');
    this.verificarErrores();
    if (
      this.error.email == '' &&
      this.error.password == '' &&
      this.error.password2 == '' &&
      this.error.admin == ''
    ) {
      this.nextStep = true;
    }
  }
}
