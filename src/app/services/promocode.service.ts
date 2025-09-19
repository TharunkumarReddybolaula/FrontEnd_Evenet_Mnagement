import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,map} from 'rxjs';

export interface PromoCode {
  id?: number;
  code: string;
  validFrom: string;
  validTo: string;
  discountPercentage: number;
}

@Injectable({
  providedIn: 'root'
})
export class PromocodeService {

  private baseUrl = 'http://localhost:5070/api/Administrator/promocode'; // your API URL

  constructor(private http: HttpClient) {}

getPromoCodes() {
  return this.http.get<PromoCode[]>(`${this.baseUrl}/view`)
    .pipe(map((data: any[]) => data.map(item => ({
        id: item.promotionCodeId,  // map promotionCodeId -> id
        code: item.code,
        validFrom: item.validFrom,
        validTo: item.validTo,
        discountPercentage: item.discountPercentage
      })))
    );
}

  addPromoCode(promo: PromoCode): Observable<any> {
    return this.http.post(`${this.baseUrl}/add`, promo);
  }

  deletePromoCode(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete?id=${id}`);
  }
}
