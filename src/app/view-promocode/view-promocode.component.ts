import { Component, OnInit } from '@angular/core';
import { PromocodeService, PromoCode } from '../services/promocode.service';

@Component({
  selector: 'app-view-promocode',
  templateUrl: './view-promocode.component.html',
  styleUrls: ['./view-promocode.component.css']
})
export class ViewPromocodeComponent implements OnInit {

  promoList: PromoCode[] = [];

  constructor(private promoService: PromocodeService) { }

  ngOnInit(): void {
    this.loadPromoCodes();
  }

  loadPromoCodes() {
    this.promoService.getPromoCodes().subscribe({
      next: (data) => this.promoList = data,
      error: (err) => {
        console.error('Error fetching promo codes:', err);
        alert('Failed to load promo codes from database.');
      }
    });
  }
}
