import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';

import { PayPal, PayPalPayment, PayPalConfiguration } from '@ionic-native/paypal';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MenuPage } from '../pages/menu/menu';
import { CartPage } from '../pages/cart/cart';
import { ItemPage } from '../pages/item/item';
import { StoresPage } from '../pages/stores/stores';
import { PayPalPage } from '../pages/paypal/paypal';
import { PromosPage } from '../pages/promos/promos';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { MenuItemService } from '../providers/http/http';
import { TimingServiceProvider } from '../providers/timing-service/timing-service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MenuPage,
    CartPage,
    ItemPage,
    StoresPage,
    PayPalPage,
    PromosPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MenuPage,
    CartPage,
    ItemPage,
    StoresPage,
    PayPalPage,
    PromosPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    PayPal,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MenuItemService,
    TimingServiceProvider,
  ]
})
export class AppModule {}
