import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { CartPage } from '../cart/cart';
import { MenuItemService } from '../../providers/http/http';
/**
 * Generated class for the PromosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-promos',
  templateUrl: 'promos.html',
})
export class PromosPage {

  PromosData: any;

  constructor(
    private menuItemService: MenuItemService,
    public navCtrl: NavController,
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.getpromos();
  }
  cartPage() {
    this.navCtrl.push(CartPage, {
    });
  }
  
  getpromos() {
    this.menuItemService.getPromotions().subscribe(
      data => {
        this.PromosData = data;
        console.log(this.PromosData)
      }
    );
  }
}
