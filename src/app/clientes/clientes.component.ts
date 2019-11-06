import { ClienteService } from './cliente.service';
import { cliente } from './clientes.model';
import { CLIENTES } from './cliente.mock';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  clientes: cliente[] = CLIENTES;

  constructor(
    private clienteService: ClienteService,
    private _route: Router
  ) { }

  ngOnInit(): void {
    this.clienteService.getClientes()
      .then((clientes: cliente[]) => {
        this.clientes = clientes;
      }).catch(err => console.log(err))
  }

  
  new(){
    this._route.navigate(['clientes/novo'])
  }

  edit(id){
    this._route.navigate(['clientes/editar/',id])
  }

}
