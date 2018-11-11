import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
 
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    
  }

  public entrar() {
    this.navCtrl.setRoot("TabsPage")
    // this.navCtrl.push("TabsPage")
    this.navCtrl.popToRoot();
  }

}
