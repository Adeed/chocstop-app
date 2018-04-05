import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { TimingServiceProvider } from '../../providers/timing-service/timing-service';
import { TimingModel } from '../../models/timingModel';
import { CartPage } from '../cart/cart';

@Component({
  selector: 'page-stores',
  templateUrl: 'stores.html'
})

export class StoresPage {

  openTimings: TimingModel[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private timingService: TimingServiceProvider) {

  }

  ngOnInit(): void {
    this.getOpenItems();
  }

  getOpenItems(): void {
    this.openTimings = this.timingService.getTimings();
  }

}
