import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../services copy/admin.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  activeMenu: string = '';  // This variable stores the currently active menu

  constructor(private router: Router) {}

  // Function to toggle the menu visibility
  toggleMenu(menu: string): void {
    // If the clicked menu is already active, collapse it (set to empty string)
    if (this.activeMenu === menu) {
      this.activeMenu = '';
    } else {
      // Otherwise, set the clicked menu as active
      this.activeMenu = menu;
    }
  }
}
