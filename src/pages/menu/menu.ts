import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { MenuItem } from '../../models/menuitem';
import { MenuItemService } from '../../providers/http/http';

import { ItemPage } from '../item/item';
import { CartPage } from '../cart/cart';

@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html'
})

export class MenuPage {

  menuitems: MenuItem[] = [];
  shownGroup = null;
  category = [
    { title: "Hot Pudding", img: "" },
    { title: "Freak Shakes", img: "" },
    { title: "Coffee Republic", img: "" },
    { title: "American Cereals", img: "" },
    { title: "U.K Cereals", img: "" }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams, private menuItemService: MenuItemService) {

  }

  toggleGroup(group) {
    if (this.isGroupShown(group)) {
      this.shownGroup = null;
    } else {
      this.shownGroup = group;
    }
  };

  isGroupShown(group) {
    return this.shownGroup === group;
  };

  getMenuItems(): void {
    this.menuitems = this.menuItemService.getItems();
  }

  ngOnInit(): void {
    this.getMenuItems();
  }

  itemTapped(event, menuitems) {
    this.navCtrl.push(ItemPage, {
      menuitems: menuitems
    });
  }

  cartPage() {
    this.navCtrl.push(CartPage, {
    });
  }

}
