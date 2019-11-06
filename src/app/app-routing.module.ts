import { ClienteNovoComponent } from './clientes/cliente-novo/cliente-novo.component';
import { ClienteDetalheComponent } from './clientes/cliente-detalhe/cliente-detalhe.component';
import { ClientesComponent } from './clientes/clientes.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'clientes', component: ClientesComponent },
  { path: 'clientes/novo', component: ClienteNovoComponent },
  { path: 'clientes/editar', component: ClienteDetalheComponent },
  { path: 'clientes/editar/:id', component: ClienteDetalheComponent },
  { path: '', pathMatch: 'full', redirectTo: 'clientes' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
