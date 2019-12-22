import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  ingredientes = [
    
];

addIngredientes() {
    this.ingredientes.push("");
}
search(){
  //pasar al backend los datos de ingredientes y nombre
  
}

}
