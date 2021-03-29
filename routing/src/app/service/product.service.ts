import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  
  private list: Product[] = [
    {id: 1, name: 'Bread', price: 2},
    {id: 2, name: 'Chesse', price: 2},
    {id: 3, name: 'Egg', price: 2},
    {id: 4, name: 'Milk', price: 2},
    {id: 5, name: 'Nutella', price: 2},
    {id: 6, name: 'Flour', price: 2},
    {id: 7, name: 'Pasta', price: 2},
  ]
  
  list$: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>([]);

  constructor() { }

  getAll(): void {
    this.list$.next(this.list);
  }
}
