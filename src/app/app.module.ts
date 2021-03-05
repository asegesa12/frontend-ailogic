import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';



import { RecuperarClaveComponent } from './components/recuperar-clave/recuperar-clave.component';
import { RecuperarCuentaComponent } from './components/recuperar-cuenta/recuperar-cuenta.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AdminComponent } from './components/admin/admin.component';
import { PasantiaAsignacionComponent } from './components/pasantia-asignacion/pasantia-asignacion.component';
import { AsignacionSubidaComponent } from './components/asignacion-subida/asignacion-subida.component';
import { ListaPasantesComponent } from './components/lista-pasantes/lista-pasantes.component';
import { SolicitudesComponent } from './components/solicitudes/solicitudes.component';
import { PasantiaConfigComponent } from './components/pasantia-config/pasantia-config.component';
import { PasanteHomeComponent } from './components/pasante-home/pasante-home.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FormularioComponent,
    SidebarComponent,
    RecuperarClaveComponent,
    RecuperarCuentaComponent,
    NavbarComponent,
    AdminComponent,
    PasantiaAsignacionComponent,
    AsignacionSubidaComponent,
    ListaPasantesComponent,
    SolicitudesComponent,
    PasantiaConfigComponent,
    PasanteHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
