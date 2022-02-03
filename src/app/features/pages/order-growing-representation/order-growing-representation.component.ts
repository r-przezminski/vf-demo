import { Component, OnInit } from '@angular/core';
import {productsMock} from "../../mocks/product.mock";

@Component({
  selector: 'app-order-growing-representation',
  templateUrl: './order-growing-representation.component.html',
  styleUrls: ['./order-growing-representation.component.scss']
})
export class OrderGrowingRepresentationComponent implements OnInit {
  products: any;
  productsLegend: { name: string, color: string }[];

  constructor() {
    this.products = productsMock;
    this.productsLegend = productsMock.map(({ color, name }) => ({ color, name }));
  }

  ngOnInit(): void {
  }

}
