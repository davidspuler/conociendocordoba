import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AstroturismoComponent } from './astroturismo/astroturismo.component';
import { CaminoDelVinoComponent } from './camino-del-vino/camino-del-vino.component';
import { ContactoComponent } from './contacto/contacto.component';
import { CordobaCapitalComponent } from './cordoba-capital/cordoba-capital.component';
import { NorteYNoroesteComponent } from './norte-y-noroeste/norte-y-noroeste.component';
import { ParquesNacionalesComponent } from './parques-nacionales/parques-nacionales.component';
import { SierrasChicasComponent } from './sierras-chicas/sierras-chicas.component';
import { SobreNosotrosComponent } from './sobre-nosotros/sobre-nosotros.component';
import { TurismoAventuraComponent } from './turismo-aventura/turismo-aventura.component';
import { TurismoReligiosoComponent } from './turismo-religioso/turismo-religioso.component';
import { ValleDeCalamuchitaComponent } from './valle-de-calamuchita/valle-de-calamuchita.component';
import { ValleDeParavachascaComponent } from './valle-de-paravachasca/valle-de-paravachasca.component';
import { ValleDePunillaComponent } from './valle-de-punilla/valle-de-punilla.component';
import { ValleDeTraslasierrasComponent } from './valle-de-traslasierras/valle-de-traslasierras.component';
import { AppRoutingModule } from '../app-routing.module';
import { Pagina404Component } from './pagina404/pagina404.component';



@NgModule({
  declarations: [
    HomeComponent,
    AstroturismoComponent,
    CaminoDelVinoComponent,
    ContactoComponent,
    CordobaCapitalComponent,
    NorteYNoroesteComponent,
    ParquesNacionalesComponent,
    SierrasChicasComponent,
    SobreNosotrosComponent,
    TurismoAventuraComponent,
    TurismoReligiosoComponent,
    ValleDeCalamuchitaComponent,
    ValleDeParavachascaComponent,
    ValleDePunillaComponent,
    ValleDeTraslasierrasComponent,
    Pagina404Component,
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports:[
    HomeComponent,
    AstroturismoComponent,
    CaminoDelVinoComponent,
    ContactoComponent,
    CordobaCapitalComponent,
    NorteYNoroesteComponent,
    ParquesNacionalesComponent,
    SierrasChicasComponent,
    SobreNosotrosComponent,
    TurismoAventuraComponent,
    TurismoReligiosoComponent,
    ValleDeCalamuchitaComponent,
    ValleDeParavachascaComponent,
    ValleDePunillaComponent,
    ValleDeTraslasierrasComponent,
    Pagina404Component
  ]
})
export class VistasModule { }
