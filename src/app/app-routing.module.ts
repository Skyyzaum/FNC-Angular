import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarComponent } from './Exame/listar/listar.component';
import { AddExame } from './Exame/add/add.component';
import { AddProcedimento } from './Procedimento/add/add.component';
import { AddPaciente } from './Paciente/add/add.component';


const routes: Routes = [
  {path:'listarExame', component:ListarComponent},
  {path:'addExame',component:AddExame},
  {path:'addProcedimento',component:AddProcedimento},
  {path:'addPaciente',component:AddPaciente}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
