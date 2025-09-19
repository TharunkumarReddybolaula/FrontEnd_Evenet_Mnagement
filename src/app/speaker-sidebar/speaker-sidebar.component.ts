import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-speaker-sidebar',
  templateUrl: './speaker-sidebar.component.html',
  styleUrls: ['./speaker-sidebar.component.css']
})
export class SpeakerSidebarComponent {
  constructor(private authService: AuthService, private router: Router) {}

  logout() {
    this.authService.logout();         // remove token
    this.router.navigate(['/signin']); // redirect to signin
  }
}
