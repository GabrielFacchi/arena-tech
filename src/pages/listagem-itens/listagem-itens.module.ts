import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListagemItensPage } from './listagem-itens';

@NgModule({
  declarations: [
    ListagemItensPage,
  ],
  imports: [
    IonicPageModule.forChild(ListagemItensPage),
  ],
})
export class ListagemItensPageModule {}
