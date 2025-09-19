import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService, SignInRequest } from '../auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  // Default request object
  request: SignInRequest = {
    username: '',
    password: '',
    role: 'admin' // default role selected
  };

  errorMessage = '';
  successMessage = '';
  loading = false;

  // Roles dropdown
  roles = ['admin', 'participant', 'speaker'];

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    this.errorMessage = '';
    this.successMessage = '';

    // ✅ Basic validation
    if (this.request.username.length < 3 || this.request.password.length < 3) {
      this.errorMessage = 'Username and password must be at least 3 characters.';
      return;
    }

    this.loading = true;

    this.authService.signin(this.request).subscribe({
      next: (res) => {
        this.authService.saveToken(res.token);
        this.loading = false;
        this.successMessage = res.message || 'Login successful!';

        // ✅ Redirect based on role
        const role = this.request.role.toLowerCase();
        if (role === 'speaker') {
          this.router.navigate(['/speaker']);   // sidebar + speaker features
        } else if (role === 'admin') {
          this.router.navigate(['/admin']);     // admin dashboard (to build later)
        } else if (role === 'participant') {
          this.router.navigate(['/participant']); // participant dashboard (to build later)
        } else {
          this.router.navigate(['/']); // fallback
        }
      },
      error: (err) => {
        this.loading = false;
        this.errorMessage = err.error?.message || 'Login failed';
        console.error('Signin error:', err);
      }
    });
  }
}
