import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Joueurs } from './joueurs';


@Injectable({
  providedIn: 'root'
})
export class JoueursService {
  joueurs!:Joueurs[]
  baseApi!:''

  constructor(private _http:HttpClient) { }

  getAllJoueurs():Observable{
return this._http.get()
  }
}
