import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-account',
  templateUrl: './nav-account.component.html',
  styleUrls: ['./nav-account.component.scss']
})
export class NavAccountComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  logIn(): void {
    console.log('LOG_IN')
  }
}
