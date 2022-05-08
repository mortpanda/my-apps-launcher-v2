import { Component, OnInit } from '@angular/core';
import { MenuListService } from '../menu-items/menu-list.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { PrimeIcons } from 'primeng/api';
import { ViewEncapsulation } from '@angular/core';
import {DockModule} from 'primeng/dock';



@Component({
  selector: 'app-sub-navbar',
  templateUrl: './sub-navbar.component.html',
  styleUrls: ['./sub-navbar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SubNavbarComponent implements OnInit {
  smallScreen: boolean;
  subMenuItem = [];
  constructor(
    private MenuListService: MenuListService,
    private breakpointObserver: BreakpointObserver,
  ) {
    this.subMenuItem = this.MenuListService.subMenuItem;

    breakpointObserver.observe([
      Breakpoints.XSmall,
      Breakpoints.Small
    ]).subscribe(result => {
      this.smallScreen = result.matches;
    });
  }

  ngOnInit(): void {
  }

}
