import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { TelaInicialPage } from '../pages/tela-inicial/tela-inicial';
import { ListagemItensPage } from '../pages/listagem-itens/listagem-itens';
import { CartaoPage } from '../pages/cartao/cartao';
import { CameraPage } from '../pages/camera/camera';
import { PeriodosPage } from '../pages/periodos/periodos';
import { HttpClientModule } from "@angular/common/http";
import { Camera } from '@ionic-native/camera';


@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    TabsPage,
    TelaInicialPage,
    CartaoPage,
    CameraPage,
    PeriodosPage,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    TabsPage,
    TelaInicialPage,
    CartaoPage,
    CameraPage,
    PeriodosPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
