import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.page.html',
  styleUrls: ['./recipe.page.scss'],
})
export class RecipePage implements OnInit {
  recipe_id = null;
  constructor(private activatedRoute: ActivatedRoute, public http: HttpClient) { }
  slideOpt = {
    loop: true,
    autoplay:true,
    speed:3000,
  
    

  };
  data: any;
 ngOnInit() {
    
   this.recipe_id = this.activatedRoute.snapshot.paramMap.get('recipe_id');
   this.http.get('assets/data/list.json').map(res => res).subscribe(res => {
    this.data = res.ingredientes;
    console.log(this.data);
  },
  (err) => {
    alert('failed loading json data');
  });
 }
 images = ['receta1.jpg', 'bigmac.jpg', 'borrar.jpg'];
}
