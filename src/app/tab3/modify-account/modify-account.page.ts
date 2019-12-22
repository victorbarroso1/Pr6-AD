import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modify-account',
  templateUrl: './modify-account.page.html',
  styleUrls: ['./modify-account.page.scss'],
})
export class ModifyAccountPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  usersArray = [
    { name:'Guille', sex:'Men', years:'23', country: 'Spain' }
    ,{ name:'Victor', sex:'Men', years:'22', country: 'Spain' }
  ];

}
