import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { MenuItem } from '../../models/menuitem';
import { MenuItems } from '../../assets/data/menu';
/*
  Generated class for the HttpProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class MenuItemService {

  selectedItems: MenuItem[] = [];

  constructor(private http: Http) {

  }

  getPromotions() {
    return this.http.get('http://localhost/chocstop-app/chocstop-server/promotions.php')
      .map(res => res.json().records);
  }

  getItems(): MenuItem[] {
    return MenuItems;
  }

  getSelectedItems(): MenuItem[] {
    return this.selectedItems;
  }

  totalPrice() {
    this.selectedItems.forEach(element => {
    });
  }

  addItem(id: number): void {
    let item = MenuItems.find(ob => ob.id === id);
    if (this.selectedItems.indexOf(item) < 0) {
      this.selectedItems.push(item);
    }
  }

  removeItem(id: number): void {
    let item = this.selectedItems.find(ob => ob.id === id);
    let itemIndex = this.selectedItems.indexOf(item);
    if (itemIndex !== -1) {
      this.selectedItems.splice(itemIndex, 1);
      this.getSelectedItems();
    }
  }

}
