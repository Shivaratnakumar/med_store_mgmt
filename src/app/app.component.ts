import { Component } from '@angular/core';

interface sideNavToggle {
  screenWidth:number,
  collapsed:boolean
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'med_store_mgmt';
  isSideNavCollapsed = false;
  screenWidth = 0;
  isLoggedIn = true;


  onToggleSidenav=(data:sideNavToggle)=>{
    this.isSideNavCollapsed = data.collapsed;
    this.screenWidth = data.screenWidth;
  }

  isLoggedInSuccess = (logInStatus:boolean) => {
    this.isLoggedIn = logInStatus;
  }
}
