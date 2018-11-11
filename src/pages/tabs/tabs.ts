import { Component } from '@angular/core';
import { TelaInicialPage } from '../tela-inicial/tela-inicial';
import { LoginPage } from '../login/login';
import { IonicPage } from 'ionic-angular';
import { CartaoPage } from '../cartao/cartao';
import { CameraPage } from '../camera/camera';
import { PeriodosPage } from '../periodos/periodos';

@IonicPage({name: 'tabs-page'})
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = TelaInicialPage;
  tab2Root = CartaoPage;
  tab3Root = CameraPage;
  tab4Root = PeriodosPage;

  constructor() {

  }
}