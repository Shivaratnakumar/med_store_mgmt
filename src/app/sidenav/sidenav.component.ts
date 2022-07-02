import { animate, keyframes, style, transition, trigger } from '@angular/animations';
import { Component, OnInit, Output,EventEmitter, HostListener } from '@angular/core';

import { navbarData } from './nav-data';

interface sideNavToggle {
  screenWidth:number,
  collapsed:boolean
}

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  animations: [
    trigger('fadeInOut',[
      transition(':enter', [
        style({opacity:0}),
        animate('350ms',
          style({opacity:1}),
        )
      ]),
      transition(':leave', [
        style({opacity:1}),
        animate('350ms',
          style({opacity:0}),
        )
      ])
    ]),
    trigger('rotate', [
      transition(':enter', [
        animate('400ms', 
          keyframes([
            style({transform: 'rotate(0deg)', offset: '0'}),
            style({transform: 'rotate(2turn)', offset: '1'})
          ])
        )
      ])
    ])
  ]
})
export class SidenavComponent implements OnInit {
  @Output() onToggleSidenav = new EventEmitter<sideNavToggle>();
  navData = navbarData;
  collapsed = false;
  screenWidth = 0;

  @HostListener('window:resize',['$event'])
  onResize(event:any){
    this.screenWidth = window.innerWidth;
    if(this.screenWidth <= 768)
    {
      this.collapsed = false;
      this.onToggleSidenav.emit({collapsed:this.collapsed,screenWidth:this.screenWidth});
    }
  }
  
  constructor() { }

  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
  }

  toggleCollapsed = ()=>{
    this.collapsed = !this.collapsed;
    this.onToggleSidenav.emit({collapsed:this.collapsed,screenWidth:this.screenWidth})
  }

  closeSidenav = () =>{
    this.collapsed = false;
    this.onToggleSidenav.emit({collapsed:this.collapsed,screenWidth:this.screenWidth})
  }
}
