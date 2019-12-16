import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  
  recipesArray = [
    {name:'Big Mac', time:'60', stars:'4.3', description: 'Para la realización del Big Mac serán necesarios: pepinillos, queso, lechuga, cebolla, salsa, pan y carne' }
    ,{ name:'McPollo', time:'60', stars:'4.0', description: 'Para la realización del McPollo serán necesarios: lechuga, mayonesa, pan y pollo'}
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

