import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email: any;
  password: any;
  showError: boolean = false;

  constructor(
    private _angularFireAuth: AngularFireAuth,
    private _matSnackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
  }

  public login(): void {
    this._angularFireAuth.signInWithEmailAndPassword(this.email, this.password)
      .then((user) => {
          this.showError = false;
          this._matSnackBar.open('Logged in successfully')
      })
      .catch((err) => {
        this.showError = true;
        this._matSnackBar.open('Unable to log user in')
      });
  }

}
