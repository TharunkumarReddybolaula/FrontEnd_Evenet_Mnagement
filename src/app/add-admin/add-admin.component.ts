import { Component } from '@angular/core';
import { AdminService,Administrator} from '../services copy/admin.service';

@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.css']
})
export class AddAdminComponent {
    newAdmin: Administrator = { name: '', email: '', phone: '' };
  username: string = '';
  password: string = '';

  constructor(private adminService: AdminService) { }

  addAdmin() {
    if (!this.username || !this.password) {
      alert('Username and Password are required!');
      return;
    }

    this.adminService.addAdmin(this.newAdmin, this.username, this.password).subscribe({
      next: (res) => {
        alert(res.message || 'Administrator added successfully!');
        this.resetForm();
      },
      error: (err) => console.error('Error adding admin:', err)
    });
  }

  resetForm() {
    this.newAdmin = { name: '', email: '', phone: '' };
    this.username = '';
    this.password = '';
  }
}
