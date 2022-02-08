import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { GetApiUserComponent } from './get-api-user/get-api-user.component';
import {HttpClientModule} from "@angular/common/http";
import { HEHEHEComponent } from './hehehe/hehehe.component';
import { DoneDoneDirective } from './hehehe/done-done.directive';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent, GetApiUserComponent, HEHEHEComponent, DoneDoneDirective],
  imports: [BrowserModule , HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
