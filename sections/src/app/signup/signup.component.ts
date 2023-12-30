import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  signupActiveVariable: boolean = false;

  signupshowed() {
    this.signupActiveVariable = !this.signupActiveVariable;
    console.log(this.signupActiveVariable);
  }
  cross() {
    console.log(this.signupActiveVariable = false);
  }
}
