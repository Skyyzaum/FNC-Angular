import { BrowserModule } from '@angular/platform-browser';
import{FormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarComponent } from './Exame/listar/listar.component';
import { AddExame } from './Exame/add/add.component';
import { AddPaciente } from './Paciente/add/add.component';
import { AddProcedimento } from './Procedimento/add/add.component';
import { HttpClientModule } from '@angular/common/http';
import { ServiceService } from './Service/service.service';

@NgModule({
  declarations: [
    AppComponent,
    ListarComponent,
    AddExame,
    AddPaciente,
    AddProcedimento
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
