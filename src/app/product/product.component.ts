import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { find } from 'rxjs';
import { products } from '../../assets/products';
import { items } from '../../assets/items';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}
  product: any;
  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const id = Number(routeParams.get('idp'));

    this.product = products.find((e) => e.id === id);
  }

  addToCart = (product: any) => {
    items.push(product);
    window.alert('Product ditambahkan');
  };
}
