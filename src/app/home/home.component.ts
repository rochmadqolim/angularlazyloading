import { Component } from '@angular/core';
import { products } from '../../assets/products';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  constructor(private router: Router) {}
  product = products;

  detail = (idp: number) => {
    this.router.navigate(['product', idp]);
  };
}
