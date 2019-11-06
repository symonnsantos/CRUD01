import { cliente } from './../clientes.model';
import { ClienteService } from './../cliente.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-cliente-detalhe',
  templateUrl: './cliente-detalhe.component.html',
  styleUrls: ['./cliente-detalhe.component.css']
})
export class ClienteDetalheComponent implements OnInit {

  _cliente: cliente;

  //Injetando dependências
  constructor(
    private clienteService: ClienteService,
    private route: ActivatedRoute,
    //private location: Location
  ) { }

  ngOnInit(): void {

    this._cliente = new cliente(0, '', '', '');

    this.route.params.forEach((params: Params) => {
      let id: number = +params['id'];

      if(id) {
        this.clienteService.getCliente(id)
          .then((cliente: cliente) => {
            console.log(cliente);
            this._cliente = cliente;
          });
      }
    });
  }

}

