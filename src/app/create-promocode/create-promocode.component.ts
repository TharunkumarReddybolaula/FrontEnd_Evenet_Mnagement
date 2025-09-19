import { Component } from '@angular/core';
import { PromocodeService, PromoCode } from '../services/promocode.service';

@Component({
  selector: 'app-create-promocode',
  templateUrl: './create-promocode.component.html',
  styleUrls: ['./create-promocode.component.css']
})
export class CreatePromocodeComponent {

  promo: PromoCode = {
    code: '',
    validFrom: '',
    validTo: '',
    discountPercentage: 0
  };

  constructor(private promoService: PromocodeService) { }

  onSubmit() {
    // Validate inputs (optional)
    if (!this.promo.code || !this.promo.validFrom || !this.promo.validTo || this.promo.discountPercentage <= 0) {
      alert('Please fill in all fields correctly!');
      return;
    }

    // Send data to Web API to add to SQL table
    this.promoService.addPromoCode(this.promo).subscribe({
      next: (res) => {
        alert('Promo code added successfully to database!');
        // Reset form
        this.promo = { code: '', validFrom: '', validTo: '', discountPercentage: 0 };
      },
      error: (err) => {
        console.error('Error adding promo code:', err);
        alert('Failed to add promo code to database. Please try again.');
      }
    });
  }
}
