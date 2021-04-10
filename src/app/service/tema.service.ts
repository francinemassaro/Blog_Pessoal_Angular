import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Tema } from '../model/tema';

@Injectable({
  providedIn: 'root'
})
export class TemaService {

  constructor(private http: HttpClient) { }

  //Criando o objeto token para não precisar copiar de headers pra frente em todos os
  // métodos. É mais bonito só usar this.token
  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  getAllTema(): Observable<Tema[]>{
    return this.http.get<Tema[]>('http://localhost:8080/tema', this.token)
  }


  postTema(tema: Tema): Observable<Tema>{
    return this.http.post<Tema>('http://localhost:8080/tema', tema, this.token)
  }

  putTema(tema: Tema): Observable<Tema>{
    return this.http.put<Tema>('http://localhost:8080/tema', tema, this.token)
  }

  //Como o delete pede um parâmetro id precisamos de outra maneira pra receber. Abre crase ao inves de aspas simples, coloca o endereço normal e o parâmetro é ${PARAMETRO}
  deleteTema(id: number){
    return this.http.delete(`http://localhost:8080/tema/${id}`, this.token)
  }

  getByIdTema(id: number): Observable<Tema>{
    return this.http.get<Tema>(`http://localhost:8080/tema/${id}`, this.token)
  }

}
