import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-nav-link',
  templateUrl: './nav-link.component.html',
  styleUrls: ['./nav-link.component.scss']
})
export class NavLinkComponent implements OnInit {
  @Input() public icon: string = '';
  @Input() public text: string = '';
  @Input() public isActive: boolean = false;
  @Input() private href: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  navigate(): void {
    console.log(this.href)
    this.isActive = !this.isActive
  }
}
