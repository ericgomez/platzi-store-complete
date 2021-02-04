import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  OnInit,
  OnDestroy,
  SimpleChanges,
  DoCheck
} from '@angular/core';

import { Product } from '../../../core/models/product.model';

import { CartService } from './../../../core/services/cart.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})

export class ProductComponent implements OnChanges, OnInit, DoCheck, OnDestroy {

  @Input() product!: Product;
  @Output() productClicked: EventEmitter<any> = new EventEmitter();

  today = new Date();

  constructor(private cartService: CartService) {
    console.log('1. constructor');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('2. ngOnChanges');
  }

  ngOnInit() {
    console.log('3. ngOnInit');
  }

  ngDoCheck(): void {
    console.log('4. ngDoCheck');
  }

  ngOnDestroy() {
    console.log('5. ngOnDestroy');
  }

  addCart() {
    console.log('añadir al carrito');
    this.cartService.addCart(this.product);
    // this.productClicked.emit(this.product.id);
  }

}