import { Component, OnInit } from '@angular/core';
import { PromocodeService, PromoCode } from '../services/promocode.service';

@Component({
  selector: 'app-delete-promocode',
  templateUrl: './delete-promocode.component.html',
  styleUrls: ['./delete-promocode.component.css']
})
export class DeletePromocodeComponent implements OnInit {

  promoList: PromoCode[] = [];

  constructor(private promoService: PromocodeService) { }

  ngOnInit(): void {
    // Fetch promo codes from backend on component load
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

onDelete(promo: PromoCode) {
  if (!promo.id) {
    alert("promo id missing");
    return;
  };

  if (confirm(`Delete promo code "${promo.code}"?`)) {
    this.promoService.deletePromoCode(promo.id).subscribe({
      next: (res: any) => {
        alert(res.message);
        this.promoList = this.promoList.filter(p => p.id !== promo.id);
      },
      error: (err) => {
        console.error('Error deleting promo code:', err);
        alert('Failed to delete promo code.');
      }
    });
  }
  this.loadPromoCodes();
}
}
