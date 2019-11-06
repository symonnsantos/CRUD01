import { CLIENTES } from './cliente.mock';
import { cliente } from './clientes.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor() { }

  getClientes(): Promise <cliente[]> {
    return Promise.resolve(CLIENTES)
  }

  getCliente(id: number): Promise<cliente> {
    return this.getClientes()
      .then((clientes: cliente[]) => clientes.find(cliente => cliente.id === id))
  }

}

