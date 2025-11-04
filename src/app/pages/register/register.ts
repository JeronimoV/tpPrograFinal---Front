import { Component } from '@angular/core';
import { SecondStepRegister } from '../../components/second-step-register/second-step-register';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [SecondStepRegister, FormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  nextStep = false;
  email = "";
  password = "";


  selectNextStep(event : any){
    event.preventDefault()
    this.nextStep = true;
  }
}
