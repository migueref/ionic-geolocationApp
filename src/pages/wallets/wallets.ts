import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Wallet,IWallet } from '../../database';
import { NewWallet } from '../new-wallet/new-wallet';
import { WalletService } from '../../services/wallets.service';

/*
  Generated class for the Wallets page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-wallets',
  templateUrl: 'wallets.html'
})
export class Wallets {
  wallets : IWallet[];
  addingPage = NewWallet;
  constructor(public navCtrl: NavController,
              private walletService: WalletService) {}

  ionViewWillEnter() {
    
    console.log(this.walletService.getID())
     Wallet.all().then(results => this.wallets = results);
  }
  set(wallet : Wallet){
    this.walletService.setID(wallet.id);
  }
}
