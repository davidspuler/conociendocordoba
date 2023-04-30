import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegistroComponent } from './auth/registro/registro.component';
import { NavComponent } from './shared/nav/nav.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './vistas/home/home.component';
import { ValleDeTraslasierrasComponent } from './vistas/valle-de-traslasierras/valle-de-traslasierras.component';
import { ValleDePunillaComponent } from './vistas/valle-de-punilla/valle-de-punilla.component';
import { ValleDeCalamuchitaComponent } from './vistas/valle-de-calamuchita/valle-de-calamuchita.component';
import { ValleDeParavachascaComponent } from './vistas/valle-de-paravachasca/valle-de-paravachasca.component';
import { NorteYNoroesteComponent } from './vistas/norte-y-noroeste/norte-y-noroeste.component';
import { SierrasChicasComponent } from './vistas/sierras-chicas/sierras-chicas.component';
import { CordobaCapitalComponent } from './vistas/cordoba-capital/cordoba-capital.component';
import { ParquesNacionalesComponent } from './vistas/parques-nacionales/parques-nacionales.component';
import { AstroturismoComponent } from './vistas/astroturismo/astroturismo.component';
import { TurismoAventuraComponent } from './vistas/turismo-aventura/turismo-aventura.component';
import { CaminoDelVinoComponent } from './vistas/camino-del-vino/camino-del-vino.component';
import { TurismoReligiosoComponent } from './vistas/turismo-religioso/turismo-religioso.component';
import { SobreNosotrosComponent } from './vistas/sobre-nosotros/sobre-nosotros.component';
import { ContactoComponent } from './vistas/contacto/contacto.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    NavComponent,
    FooterComponent,
    HomeComponent,
    ValleDeTraslasierrasComponent,
    ValleDePunillaComponent,
    ValleDeCalamuchitaComponent,
    ValleDeParavachascaComponent,
    NorteYNoroesteComponent,
    SierrasChicasComponent,
    CordobaCapitalComponent,
    ParquesNacionalesComponent,
    AstroturismoComponent,
    TurismoAventuraComponent,
    CaminoDelVinoComponent,
    TurismoReligiosoComponent,
    SobreNosotrosComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
