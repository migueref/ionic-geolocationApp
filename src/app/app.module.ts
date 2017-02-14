import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
//Pages
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { Transactions } from '../pages/transactions/transactions';
import { Adding } from '../pages/adding/adding';
import { Map } from '../pages/map/map';
import { Wallets } from '../pages/wallets/wallets';
import { NewWallet } from '../pages/new-wallet/new-wallet';
//Services
import { GeolocationService } from '../services/geolocation.service';
import { WalletService } from '../services/wallets.service';
import { TransactionService } from '../services/transactions.service';



@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    Transactions,
    Adding,
    Map,
    Wallets,
    NewWallet
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    Transactions,
    Adding,
    Map,
    Wallets,
    NewWallet
  ],
  providers: [
    GeolocationService,
    WalletService,
    TransactionService
  ]
})
export class AppModule {}
