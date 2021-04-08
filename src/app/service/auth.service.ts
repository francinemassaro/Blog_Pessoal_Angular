import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { User } from '../model/user';
import { UserLogin } from '../model/userLogin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  
  entrar (UserLogin: UserLogin): Observable<UserLogin>{
    return this.http.post<UserLogin>('http://localhost:8080/usuarios/logar', UserLogin)
  }

  cadastrar (user:User): Observable<User>{
    return this.http.post<User>('http://localhost:8080/usuarios/cadastrar', user)
  }

  //Pra saber se o token está preenchido, ou seja, quando clica em entrar
  logado(){
      let ok: boolean = false

      //começa com a execução. Ok é falso.
      //Se o enviroment.token for ! = diferente de vazio ele muda o ok para true
      if (environment.token != ''){
        ok=true
      }

      return ok
  }

}
