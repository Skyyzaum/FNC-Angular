import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fnc';

  constructor(private router:Router){}

  listarExame(){
    this.router.navigate(["listarExame"]);
  }
  addExame(){
    this.router.navigate(["addExame"]);
  }
  addPaciente(){
    this.router.navigate(["addPaciente"]);
  }
  addProcedimento(){
    this.router.navigate(["addProcedimento"]);
  }
}
