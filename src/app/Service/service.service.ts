import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Exame } from '../Modelo/Exame';
import { Paciente } from '../Modelo/Paciente';
import { Procedimento } from '../Modelo/Procedimento';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  Url='http://localhost:8080/api/exames'
  UrlSaveExame='http://localhost:8080/api/salvar-exames'
  UrlSavePaciente='http://localhost:8080/api/salvar-paciente'
  UrlSaveProcedimento='http://localhost:8080/api/salvar-procedimento'

  getExames() {
    return this.http.get<Exame[]>(this.Url)
  }

  createExame(exame: Exame) {
    return this.http.post<Exame>(this.UrlSaveExame, exame);
  }

  createPaciente(paciente: Paciente) {
    return this.http.post<Paciente>(this.UrlSavePaciente, paciente);
  }

  createProcedimento(procedimento: Procedimento) {
    return this.http.post<Procedimento>(this.UrlSaveProcedimento, procedimento);
  }
}
