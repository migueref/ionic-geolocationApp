import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Wallet } from '../../database';

/*
  Generated class for the NewWallet page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-new-wallet',
  templateUrl: 'new-wallet.html'
})
export class NewWallet {
  model : Wallet = new Wallet(null,"");
  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello NewWallet Page');
  }
  save(){
    this.model.save().then(()=>{
      this.navCtrl.pop();
    });
  }

}
