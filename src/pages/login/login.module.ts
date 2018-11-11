import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginPage } from './login';

@NgModule({
  declarations: [
    LoginPage,
  ],
  entryComponents: [
  ],
  imports: [
    IonicPageModule.forChild(LoginPage),
  ],  
})
export class LoginPageModule {}
