import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { StorageService } from '../Services/storage.service';
import { UserService } from '../Services/user.service';
import { NewUsers, UsersLogin } from '../interfaces/Users';
import { tap } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  emailLogin = new FormControl('', [Validators.required, Validators.email]);
  passwordLogin = new FormControl('', [Validators.required]);
  formGroupLogin = this._formBuilder.group({
    email: this.emailLogin,
    password: this.passwordLogin
  });
  userRegister = new FormControl('', [Validators.required]);
  emailRegister = new FormControl('', [Validators.required, Validators.email]);
  passwordRegister = new FormControl('', [Validators.required]);
  formGroupRegister = this._formBuilder.group({
    name: this.userRegister,
    email: this.emailRegister,
    password: this.passwordRegister
  });
  isLogin: boolean = true;
  errorResponse: boolean = false;

  constructor(
    public _storage: StorageService,
    public _formBuilder: FormBuilder,
    public _user: UserService,
  ) {
    _storage.clearAll();
  }

  login() {
    this.errorResponse = false;
    const userLogin: UsersLogin = {
      email: this.formGroupLogin.value.email,
      password: this.formGroupLogin.value.password
    }
    this._user.login(userLogin).pipe(
      tap(response => {
        if (response.status) {
          console.log("📎 ~ entre > ");
        } else {
          this.errorResponse = true;
        }
      })
    ).subscribe();
  }
  
  register() {
    this.errorResponse = false;
    const newUser: NewUsers = {
      name: this.formGroupRegister.value.name,
      email: this.formGroupRegister.value.email,
      password: this.formGroupRegister.value.password
    }
    this._user.register(newUser).pipe(
      tap(response => {
        if (response.status) {
          this.isLogin = true;
        } else {
          this.errorResponse = true;
        }
      })
    ).subscribe();
  }

  errorMessageEmail() {
    if (this.isLogin) {
      return this.emailLogin.hasError('email') ? 'Not a valid email' : '';
    } else {
      return this.emailRegister.hasError('email') ? 'Not a valid email' : '';
    }
  }

}
