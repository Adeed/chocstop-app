import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PayPal, PayPalPayment, PayPalConfiguration } from '@ionic-native/paypal';

import { Config } from '../../config';

@Component({
	selector: 'page-paypal',
	templateUrl: 'paypal.html',
})

export class PayPalPage {

	cartDetails: string;
	constructor(public navParams: NavParams, private payPal: PayPal) {
		this.cartDetails = navParams.data.cartDetails.toString();
	}

	pay() {
		this.payPal.init({
			PayPalEnvironmentProduction: Config.payPalEnvironmentProduction,
			PayPalEnvironmentSandbox: Config.payPalEnvironmentSandbox

		}).then(() => {
			// Environments: PayPalEnvironmentNoNetwork, PayPalEnvironmentSandbox, PayPalEnvironmentProduction
			this.payPal.prepareToRender('PayPalEnvironmentSandbox', new PayPalConfiguration({
				// Only needed if you get an "Internal Service Error" after PayPal login!
				//payPalShippingAddressOption: 2 // PayPalShippingAddressOptionPayPal
			})).then(() => {
				const payment = new PayPalPayment('' + this.cartDetails, 'USD', 'Description', 'sale');
				console.log(payment)
				this.payPal.renderSinglePaymentUI(payment).then((response) => {
					alert(`Successfully paid. Status = ${response.response.state}`);
					console.log(response);
				}, () => {
					console.error('Error or render dialog closed without being successful');
				});
			}, () => {
				console.error('Error in configuration');
			});
		}, () => {
			console.error('Error in initialization, maybe PayPal isn\'t supported or something else');
		});
	}
}