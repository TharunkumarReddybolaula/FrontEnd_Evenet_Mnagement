import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-participant-sidebar',
  templateUrl: './participant-sidebar.component.html',
  styleUrls: ['./participant-sidebar.component.css']
})
export class ParticipantSidebarComponent {
    constructor(private authService: AuthService, private router: Router) {}

   logout() {
    this.authService.logout();         // remove token
    this.router.navigate(['/signin']); // redirect to signin
  }

}
