import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-own',
  templateUrl: './own.page.html',
  styleUrls: ['./own.page.scss'],
})
export class OwnPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  recipesArray = [
    {name:'Curry de Verduras con patatas asadas', time:'90', stars:'4.3', description: 'Para realizar esta receta será necesario...', imagen: 'receta1.jpg' }
    ,{ name:'Caldo de navidad con caracolas rellenas', time:'60', stars:'4.0', description: 'Comida perfecta para servir en navidades...', imagen: 'receta2.jpg'}
    ,{ name:'Patatas', time:'5', stars:'4.9', description: 'Para la realización de patatas necesitarás: Patatas'}
    , { name:'docs/', time:'0', stars:'0' , description: 'Prueba enlaces variables'}
    , { name:'docs/', time:'0', stars:'0' , description: 'Prueba enlaces variables'}
    , { name:'docs/', time:'0', stars:'0' , description: 'Prueba enlaces variables'}
    , { name:'docs/', time:'0', stars:'0' , description: 'Prueba enlaces variables'}
  ];
}
