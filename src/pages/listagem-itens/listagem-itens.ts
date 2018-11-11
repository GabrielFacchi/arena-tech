import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

/**
 * Generated class for the ListagemItensPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-listagem-itens',
  templateUrl: 'listagem-itens.html',
})
export class ListagemItensPage {

  private tipo: String;
  itens: string;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private http : HttpClient) {
    this.tipo = navParams.get("tipo");
  }
/**
  Listar(){
    return new Promise((resolve,reject)=>{
      this.http.get('http://172.23.1.83:8000/api/detalhes/?format=json').subscribe((result: any)=>{
        resolve(result.json());
      })
    })  
  }**/

  ionViewDidLoad() {
    if (this.tipo == "totalGanhos") {
      this.itens = JSON.parse('[{"id":1,"titulo":"Combustivel","valor":44.0,"local":"Panda"},{"id":2,"titulo":"Triplo X + Coca","valor":33.0,"local":"Barra Lanches"},{"id":3,"titulo":"Roupas","valor":210.0,"local":"Bem me quer"},{"id":4,"titulo":"Perfume","valor":80.0,"local":"Boticário"},{"id":5,"titulo":"Sapato","valor":250.0,"local":"Calcebel"},{"id":6,"titulo":"Tênis","valor":99.0,"local":"Pitol"},{"id":7,"titulo":"Celular","valor":900.0,"local":"Americanas"},{"id":8,"titulo":"Lanche","valor":15.0,"local":"Bom Bocado"},{"id":9,"titulo":"Almoço","valor":25.99,"local":"Toscan"}]');
    } else {
      this.itens = JSON.parse('[{"id":1,"descricao":"Economizou realizando uma de suas rotas frequentes não indo de carro","valor":8.3},{"id":2,"descricao":"Economizou deixando de comprar: Masso de Cigarro, em Supermercado Mano Manfroi.","valor":12.0}]');
    }
    // Chamar api e popular itens.
  }

}
