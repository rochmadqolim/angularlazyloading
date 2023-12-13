import { Component } from '@angular/core';
import { ServiceService } from '../../sercives/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrl: './list-product.component.css',
})
export class ListProductComponent {
  constructor(private productService: ServiceService, private router: Router) {}

  product?: any[];
  ngOnInit() {
    // this.getAll();
  }

  // getAll() {
  //   this.productService.getAll().subscribe({
  //     next: (data) => {
  //       this.product - data;
  //     },
  //     error: (e) => {
  //       window.alert(e);
  //     },
  //   });
  // }

  addProduct() {
    this.router.navigate(['create']);
  }
}
