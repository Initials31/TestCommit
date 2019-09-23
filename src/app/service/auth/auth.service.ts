import { Injectable } from '@angular/core';
import { User } from 'src/app/interface/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  

  errorMsg: string;
  constructor(private http: HttpClient) {this.errorMsg=null}

  public login(userInfo: User){
    if (userInfo.username == 'vincentadmin' && userInfo.password == 'jesuisleroi'){              
              localStorage.setItem('ACCESS_TOKEN', "access_token");               
    }else{
      this.errorMsg="T'as déjà oublié ? Tant pis pour toi... :-)";
    }
  }

  public isLoggedIn(){
    return localStorage.getItem('ACCESS_TOKEN') !== null;
  }

  public logout(){
    localStorage.removeItem('ACCESS_TOKEN');
}
}