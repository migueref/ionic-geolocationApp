import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Transaction } from '../../database';
import { GeolocationService } from '../../services/geolocation.service';
import {  Camera,CameraOptions  } from "ionic-native";
import { WalletService } from '../../services/wallets.service';
/*
  Generated class for the Adding page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-adding',
  templateUrl: 'adding.html'
})
export class Adding {
  model : Transaction;
  shouldGeolocate  : boolean=false;
  shouldSend  : boolean=true;
  imageData : string;
  constructor(public navCtrl: NavController, public geolocator: GeolocationService, private walletService:WalletService) {}

  ionViewDidLoad() {
    this.model  = this.cleanTransaction();
    console.log(this.model);

  }
  getPhoto(){
  let cameraOptions : CameraOptions={
    quality:  80,
    destinationType: Camera.DestinationType.DATA_URL,
    sourceType: Camera.PictureSourceType.CAMERA,
    allowEdit:  false,
    encodingType: Camera.EncodingType.JPEG,
    targetWidth: 100,
    targetHeight: 100
  };
  Camera.getPicture(cameraOptions).then((imageData)=>{
      let base64Image = 'data:image/jpeg;base64,'+imageData;
      this.imageData  = base64Image;
      this.model.imageUrl = this.imageData
    }).catch((err)=>console.log(err))
  }
  getLocation(){
    if(this.shouldGeolocate){
      this.shouldSend=false;
      this.geolocator.get().then((resultado)=>{
        this.model.setCoords(resultado.coords);
        console.log(this.model);
        this. shouldSend=true;
      }).catch((err)=>console.log(err))
    }else{
      this.model.cleanCoords();
      console.log(this.model);
    }

  }
  save(){
    if(this.shouldSend){
      this.model.save().then(result=>{
        this.model  = this.cleanTransaction();

        this.navCtrl.pop();
      });
    }

  }
  cleanTransaction() : Transaction{
    let transaction = new Transaction(null,"");
    transaction.walletId=this.walletService.getID();
    return transaction;
  }
}
