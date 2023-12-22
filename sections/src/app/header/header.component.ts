import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {


  
  menuvariable:boolean = false;
  menuiconvariable:boolean = false;

  openmenu() {
    this.menuvariable =! this.menuvariable;
    this.menuiconvariable =! this.menuiconvariable;
  }




}
