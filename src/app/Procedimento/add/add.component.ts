import { Component, OnInit } from '@angular/core';
import { Procedimento } from 'src/app/Modelo/Procedimento';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddProcedimento implements OnInit {
  procedimento: Procedimento;

  constructor(private route: ActivatedRoute, private router: Router, private service: ServiceService) { 
    this.procedimento = new Procedimento(); 
  }
  ngOnInit() {
  }
  CadastrarProcedimento(){
    this.service.createProcedimento(this.procedimento).subscribe(resposta => this.ListarExames())
  }
  ListarExames(){
    this.router.navigate(['/listar-exames'])
  }

}
