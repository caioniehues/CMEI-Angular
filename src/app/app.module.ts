import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PaginaInicialComponent } from './pagina-inicial/pagina-inicial.component';
import { LoginComponent } from './pagina_inicial/login/login.component';
import { CadastroComponent } from './pagina_inicial/cadastro/cadastro.component';
import { PerfilComponent } from './perfil/perfil.component';
import { CmeiComponent } from './perfil/cmei/cmei.component';
import { PaginaInicialLoginComponent } from './pagina-inicial/pagina-inicial-login/pagina-inicial-login.component';
import { PaginaInicialCadastroComponent } from './pagina-inicial/pagina-inicial-cadastro/pagina-inicial-cadastro.component';
import { PerfilCmeiComponent } from './perfil/perfil-cmei/perfil-cmei.component';
import { PerfilUsuarioComponent } from './perfil/perfil-usuario/perfil-usuario.component';
import { PerfilUsuarioEditComponent } from './perfil/perfil-usuario-edit/perfil-usuario-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PaginaInicialComponent,
    LoginComponent,
    CadastroComponent,
    PerfilComponent,
    CmeiComponent,
    PaginaInicialLoginComponent,
    PaginaInicialCadastroComponent,
    PerfilCmeiComponent,
    PerfilUsuarioComponent,
    PerfilUsuarioEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
