import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { MenuItem } from '../../models/menuitem';
import { MenuItemService } from '../../providers/http/http';

import { CartPage } from '../cart/cart';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  menuitems: MenuItem[] = [];

  constructor(public navCtrl: NavController, private menuItemService: MenuItemService) {

  }

  ngOnInit(): void {
    this.getMenuItems();
  }

  getMenuItems(): void {
    this.menuitems = this.menuItemService.getItems();
  }

  cartPage() {
    this.navCtrl.push(CartPage, {

    });
  }

}
