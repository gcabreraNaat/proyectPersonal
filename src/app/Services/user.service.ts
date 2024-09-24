import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { NewUsers, UsersLogin } from '../interfaces/Users';
import { DataResponse } from '../interfaces/dataResponse';
import { ProcessService } from './process.service';

const URL: string = environment.LINK + environment.PORT;

@Injectable({
  providedIn: 'root'
})
export class UserService {

constructor(
  public _http: HttpClient,
  public _process: ProcessService,
) {}

login(user:UsersLogin) {
  const encryptUser = {"user": this._process.encryptAES(JSON.stringify(user))};
  const endpoint = URL + environment.LOGIN;
  return this._http.post<DataResponse>(endpoint, encryptUser);
}

register(user:NewUsers) {
  const endpoint = URL + environment.REGISTER;
  return this._http.post<DataResponse>(endpoint,user);
}

}
