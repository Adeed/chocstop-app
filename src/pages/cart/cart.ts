import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import moment from 'moment';

import { MenuItem } from '../../models/menuitem';
import { MenuItemService } from '../../providers/http/http';

import { PayPalPage } from '../paypal/paypal';

@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html'
})
export class CartPage {

  cartItems: MenuItem[] = [];
  totalItems: number = 0;
  totalPrice: number = 0;
  closed;
  
  isenabled: boolean = false;
  currentDateTime = moment().format("HH:mm:ss");

  public minTime = "00:00:00";
  public maxTime = "24:00:00";

  constructor(
    public navCtrl: NavController,
    private menuItemService: MenuItemService,
    public alertCtrl: AlertController,
    public navParams: NavParams
  ) {  }

  ngOnInit(): void {
    this.getItemsForCart();
    this.cartTotal();
    this.checkOpenTime();
  }

  // compares current time to shop opening timings
  checkOpenTime() {
    if (this.currentDateTime >= this.minTime) {
      if (this.currentDateTime <= this.maxTime) {
        this.isenabled = true;
      }
    } else {
        this.closed = "  <button primary block>Choch Stop Diner is currently closed.</button>";
    }
  }
  
  // fetches cart items from the service
  getItemsForCart(): void {
    this.cartItems = this.menuItemService.getSelectedItems();
  }

  // removes selected item from cart through service
  removeItemFromCart(id: number): void {
    this.menuItemService.removeItem(id);
    this.cartTotal();
    this.reloadCart();
  }

  // refreshes cart page to show updated data
  reloadCart() {
    this.navCtrl.insert(1, CartPage);
    this.navCtrl.pop();
  }

  // calculates total items in cart and total value of all items
  cartTotal() {
    this.cartItems.forEach(item => {
      this.totalItems = this.totalItems + item.quantity;
    });

    this.cartItems.forEach(item => {
      let ItemPrice = item.quantity * item.price;
      this.totalPrice = this.totalPrice + ItemPrice;
    });
  }

  // sends total price of all cart items to paypal payment page
  checkout(totalPrice) {
    if (this.totalItems >= 1) {
      let alert = this.alertCtrl.create({
        title: 'Proceed to Checkout',
        message: 'To confirm your order click Proceed!',
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            handler: () => {
              console.log('Cancel clicked');
            }
          },
          {
            text: 'Proceed',
            handler: () => {
              this.navCtrl.push(PayPalPage, {
                cartDetails: this.totalPrice.toString()
              });
            }
          }
        ]
      });
      alert.present()
    }
  }

}