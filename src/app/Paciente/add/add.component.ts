import { Component, OnInit } from '@angular/core';
import { Paciente } from 'src/app/Modelo/Paciente';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddPaciente implements OnInit {

  paciente: Paciente;
  constructor(private route: ActivatedRoute, private router: Router, private service: ServiceService) {
    this.paciente = new Paciente();
   }

  ngOnInit() {
  }
  CadastrarPaciente(){
    this.service.createPaciente(this.paciente).subscribe(resposta => this.ListarExames())
  }
  ListarExames(){
    this.router.navigate(['/listar-exame']);
  }

}
