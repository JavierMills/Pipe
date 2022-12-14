import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { VentasModule } from './ventas/ventas.module';
import LocalEsp from '@angular/common/locales/es-MX'
import LocalFr from '@angular/common/locales/fr'
import { registerLocaleData} from '@angular/common'

registerLocaleData(LocalEsp)
registerLocaleData( LocalFr)

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    VentasModule,
    SharedModule,
    RouterModule
    ],
  providers: [{
    provide: LOCALE_ID, useValue:'es-MX'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
