import { ClienteService } from './cliente.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClienteDetalheComponent } from './cliente-detalhe/cliente-detalhe.component';
import { ClienteNovoComponent } from './cliente-novo/cliente-novo.component';



@NgModule({
  declarations: [
    ClienteDetalheComponent,
    ClienteNovoComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    ClienteService
  ]
})
export class ClientesModule { }
