import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/Service/service.service';
import { Router } from '@angular/router';
import { Exame } from 'src/app/Modelo/Exame';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
  exames: Exame[];

  constructor(private service: ServiceService, private router: Router) { }

  ngOnInit() {
    this.service.getExames().subscribe(resposta => {this.exames = resposta})
  }

}
