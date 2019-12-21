import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  
  recipesArray = [
    {name:'Curry de Verduras con patatas asadas', time:'90', stars:'4.3', description: 'Para realizar esta receta será necesario...', imagen: 'receta1.jpg' }
    ,{ name:'Caldo de navidad con caracolas rellenas', time:'60', stars:'4.0', description: 'Comida perfecta para servir en navidades...', imagen: 'receta2.jpg'}
    ,{ name:'Patatas', time:'5', stars:'4.9', description: 'Para la realización de patatas necesitarás: Patatas'}
    , { name:'docs/', time:'0', stars:'0' , description: 'Prueba enlaces variables'}
    , { name:'docs/', time:'0', stars:'0' , description: 'Prueba enlaces variables'}
    , { name:'docs/', time:'0', stars:'0' , description: 'Prueba enlaces variables'}
    , { name:'docs/', time:'0', stars:'0' , description: 'Prueba enlaces variables'}
  ];
  recent_recipes_Array = [
    this.recipesArray[0], this.recipesArray[1], this.recipesArray[2], this.recipesArray[3], this.recipesArray[4]
  ];

}

