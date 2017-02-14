import { Component } from '@angular/core';

import { Transactions } from '../transactions/transactions';
import { Map } from '../map/map';
import { ContactPage } from '../contact/contact';
import { Wallets } from '../wallets/wallets';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = Transactions;
  tab2Root: any = Map;
  tab3Root: any = Wallets;

  constructor() {

  }
}
