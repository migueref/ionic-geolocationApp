import { Injectable } from '@angular/core';
import {  Wallet  } from '../database';

export const StorageKey="walletID"
@Injectable()
export class WalletService{
  setID(walletID){
    localStorage.setItem(StorageKey, walletID);
  }
  getID() : number{
    return parseInt(localStorage.getItem(StorageKey));
  }
  empty():boolean{
    return !localStorage.getItem(StorageKey);
  }
  validateFirstWallet(){
    return new Promise((resolve,reject)=>{
      //Get first wallet
      Wallet.first().then((wallet)=>{
        //promise for search first wallet
        if(!wallet){
          //create first wallet
          Wallet.createFirst().then((resultado)=>{
            //promise when create first wallet is success
            console.log("First wallet is already created")
            this.setID(resultado);
            resolve();
          })
        }else{
          console.log("wallet already exists")
        //  console.log(wallet)
          this.setID(wallet.id);
          resolve();
        }
      });
    })
  }
}
