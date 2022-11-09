
import { AuthGuard } from './auth/auth.guard';

//Views componentes
import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './components/nav/nav.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Tecnicos
import { TecnicoListComponent } from './components/tecnico/tecnico-list/tecnico-list.component';
import { TecnicoDeleteComponent } from './components/tecnico/tecnico-delete/tecnico-delete.component';
import { TecnicoCreateComponent } from './components/tecnico/tecnico-create/tecnico-create.component';
import { TecnicoUpdateComponent } from './components/tecnico/tecnico-update/tecnico-update.component';
//Login
import { LoginComponent } from './components/login/login.component';
//ClienteComponent
import { ClienteListComponent } from './components/cliente/cliente-list/cliente-list.component';
import { ClienteCreateComponent } from './components/cliente/cliente-create/cliente-create.component';
import { ClienteDeleteComponent } from './components/cliente/cliente-delete/cliente-delete.component';
import { ClienteUpdateComponent } from './components/cliente/cliente-update/cliente-update.component';
import { ChamadoListComponent } from './components/chamado/chamado-list/chamado-list.component';
import { ChamadoCreateComponent } from './components/chamado/chamado-create/chamado-create.component';



const routes: Routes = [
  {path: 'login', component: LoginComponent},
  //AuthGuard que configuramos vai fala quem pode entrar ou não
  {path: '', component : NavComponent, canActivate:[AuthGuard], children: 
  [ {path: 'home', component: HomeComponent},

    {path: 'tecnicos',            component: TecnicoListComponent},
    {path: 'tecnicos/create',     component: TecnicoCreateComponent},
    {path: 'tecnicos/update/:id', component: TecnicoUpdateComponent},
    {path: 'tecnicos/delete/:id', component: TecnicoDeleteComponent},

    { path: 'clientes',            component:   ClienteListComponent },
    { path: 'clientes/create',     component: ClienteCreateComponent },
    { path: 'clientes/update/:id', component: ClienteUpdateComponent },
    { path: 'clientes/delete/:id', component: ClienteDeleteComponent },
    
    {path: 'chamados',             component: ChamadoListComponent},
    {path: 'chamados/create',      component: ChamadoCreateComponent},
    
  ]
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
