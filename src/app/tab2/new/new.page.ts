import { Component, OnInit } from '@angular/core';
import {Platform} from '@ionic/angular';
//import { platform } from 'os';

@Component({
  selector: 'app-new',
  templateUrl: './new.page.html',
  styleUrls: ['./new.page.scss'],
})
export class NewPage implements OnInit {
  
  constructor(platform: Platform) {
    platform.ready().then((readySource) => {
      return (platform.height());
    });
  }
  ngOnInit() {
  }
  ingredientes = [
    
  ];
  addIngredientes() {
    this.ingredientes.push("");
}

}


