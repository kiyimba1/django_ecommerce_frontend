import { Component, OnInit } from '@angular/core';

import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: any[];

  constructor(private productService: ProductService) { }
  // tslint:disable-next-line:typedef
  getProducts() {
    this.productService.getProducts()
      .subscribe(data => this.products = data);
  }

  ngOnInit(): void {
    this.getProducts()
  }

}
