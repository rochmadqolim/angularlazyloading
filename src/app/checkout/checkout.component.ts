import { Component } from '@angular/core';
import { item, items } from '../../assets/items';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css',
})
export class CheckoutComponent {
  cart: item[] = items;

  purchase = () => {
    if (this.cart.length >= 1) {
      this.cart = [];
      window.alert('Checkout Success');
    } else {
      window.alert('Cart Kosong');
    }
  };
}
