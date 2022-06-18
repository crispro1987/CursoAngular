import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { Pagina2Component } from './pagina2/pagina2.component';
import { Pagina1Component } from './pagina1/pagina1.component';
import { Componente1Component } from './componente1/componente1.component';
import { Componente2Component } from './componente2/componente2.component';
import { ContadorService } from './shared/contador.service';
import { TitleMagentaDirective } from './shared/title-magenta.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Pagina2Component,
    Pagina1Component,
    Componente1Component,
    Componente2Component,
    TitleMagentaDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    ContadorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
