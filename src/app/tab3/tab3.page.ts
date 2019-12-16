import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  usersArray = [
    { name:'Guille', sex:'Men', years:'23', country: 'Spain' }
    ,{ name:'Victor', sex:'Men', years:'22', country: 'Spain' }
  ];
 // constructor() {}

}
