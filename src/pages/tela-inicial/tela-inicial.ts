import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-tela-inicial',
  templateUrl: 'tela-inicial.html',
})
export class TelaInicialPage {

  totalGanhos = 40.25;
  deixouDeGanhar = 10.55;
  saldoAtual = 255.15;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

 

  abrirListagem(tipoParam) {
    this.navCtrl.push("ListagemItensPage", {tipo: tipoParam})
  }

  showAlert() {
    const alert = this.alertCtrl.create({
      title: 'Que pena!',
      subTitle: 'Você deixou de economizar R$ 8,00.',
      buttons: ['Não repetirei este erro']
    });
    alert.present();
  }

  ionViewDidLoad() {
    this.showAlert();
  }

}
