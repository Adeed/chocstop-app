import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { MenuItem } from '../../models/menuitem';
import { MenuItemService } from '../../providers/http/http';

import { CartPage } from '../cart/cart';
import { MenuPage } from '../menu/menu';
@Component({
  selector: 'page-item',
  templateUrl: 'item.html'
})
export class ItemPage {

  selectedItem: MenuItem[] = [];
  quantity: Number = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams, private menuItemService: MenuItemService) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('menuitems');
  }

  addItemInCart(id: number): void {
    this.menuItemService.addItem(id);
    this.navCtrl.pop({});

  }
  ngOnInit(): void {

  }
}
