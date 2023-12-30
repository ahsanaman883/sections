import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {


  modalActiveVeriable: boolean = false;

  searchshowed()   {
      this.modalActiveVeriable = !this.modalActiveVeriable;
  }
  cross() {
    console.log(this.modalActiveVeriable = false);
  }

}
