import { Component, OnInit } from '@angular/core';
import { AdminService,Administrator } from '../services copy/admin.service';
@Component({
  selector: 'app-view-admin',
  templateUrl: './view-admin.component.html',
  styleUrls: ['./view-admin.component.css']
})
export class ViewAdminComponent implements OnInit {

  admins: Administrator[] = [];
  loading: boolean = false;
  errorMessage: string = '';

  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
    this.loadAdmins();
  }

  loadAdmins() {
    this.loading = true;
    this.adminService.getAllAdmins().subscribe({
      next: (data) => {
        this.admins = data;
        this.loading = false;
      },
      error: (err) => {
        console.error('Error fetching admins:', err);
        this.errorMessage = err?.error || 'Error fetching administrators.';
        this.loading = false;
      }
    });
  }
}
