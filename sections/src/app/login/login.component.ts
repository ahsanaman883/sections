import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor() { }




  activeModal: boolean = false; // Initially, the modal is not active

    toggleClass() {
    this.activeModal = !this.activeModal;
  }
  cross() {
    console.log(this.activeModal = false);
  }








  // activeModal: boolean = false; // Initially, the modal is not active

  //   toggleClass() {
  //   this.activeModal = !this.activeModal;
  // }
  // cross() {
  //   console.log(this.activeModal = false);
  // }


  


}
