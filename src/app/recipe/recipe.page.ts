import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.page.html',
  styleUrls: ['./recipe.page.scss'],
})
export class RecipePage implements OnInit {
  recipe_id = null;
  constructor(private activatedRoute: ActivatedRoute) { }
  slideOpt = {
    loop: true,
    autoplay:true,
    speed:3000,
  
    

  };
 ngOnInit() {
   this.recipe_id = this.activatedRoute.snapshot.paramMap.get('recipe_id');
 }
 images = ['receta1.jpg', 'bigmac.jpg', 'borrar.jpg'];
}
