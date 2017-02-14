import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import {Transaction} from '../../database';
import {Adding} from '../adding/adding';
import {WalletService} from '../../services/wallets.service';
import {TransactionService} from '../../services/transactions.service';
/*
/*
  Generated class for the Transactions page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-transactions',
  templateUrl: 'transactions.html'
})
export class Transactions {
  title : string = "Movements";
  transactions  : any;
  addingPage = Adding;
  constructor(public navCtrl: NavController,private walletService : WalletService,private transactionService : TransactionService) {}

  ionViewWillEnter() {
    if(this.walletService.empty()){
      this.walletService.validateFirstWallet();
    }
    console.log(this.walletService.getID());
    // let transaction = new Transaction(20,"primera transaccion mg");
    // transaction.save();
    this.loadTransactions();
  }
  loadTransactions(){
    this.transactionService.all()
    .then((data)  =>  {
      this.transactions=data;
      console.log(this.transactions);
    });
  }

}
