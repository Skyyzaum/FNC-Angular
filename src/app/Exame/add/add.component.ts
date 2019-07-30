import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import { Exame } from 'src/app/Modelo/Exame';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddExame implements OnInit {

  exame : Exame;

  constructor(private route: ActivatedRoute, private router: Router, private service: ServiceService) {
    this.exame = new Exame();
  }
  ngOnInit() {
  }
  CadastrarExame(){
    this.service.createExame(this.exame).subscribe(resposta => this.ListarExame())
  }
  ListarExame(){
    this.router.navigate(['/listar-exame']);
  }

}
