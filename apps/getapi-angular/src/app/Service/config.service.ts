import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";
import { Observable } from 'rxjs';
import {Babe} from './asset/Babe';
import {UserInfo} from "../Interface/UserInfo";
@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  constructor( private http: HttpClient) { }
  getConfig():Observable<UserInfo[]> {
    return this.http.get<UserInfo[]>(`${Babe.urlOriginal}`);
  }
}
