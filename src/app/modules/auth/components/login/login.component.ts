import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import * as data from '../../../../core/services/jsons/users.json'
import { Router } from '@angular/router';

export interface User {
  email: string;
  name: string;
  password: string;
}


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginform: FormGroup;
  users: User[] = [];
  
  constructor(private fb: FormBuilder, private router: Router ) { 
    // Se inicializa el formulario reactivo
    this.loginform = this.fb.group({
      email: new FormControl('',[Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]),
      password: new FormControl('', Validators.required)
    });
  }

  ngOnInit(): void {
    // se llena la lista de usuarios a logear por el JSON
    this.users = this.getJsonUsers()?.default.Users;
  }

  // Metodo que devuelve la lista de usuarios
  getJsonUsers() {
    return (data as any);
  }

  login() {
    // valida si el formulario esta correto
    if(this.loginform.status === "VALID") {
      
      if(this.validateUserLogin() === true) {
        this.router.navigate(['/home/category']);
      }
    } else {
    // si no esta correto devuelve una alerta 
      alert("Validar información ingresada")
    }
  }

  validateUserLogin(): boolean {
    let correct = false;
    let user = this.users.find(user => user.email.toLocaleUpperCase() === this.loginform.get('email').value.toLocaleUpperCase() && this.loginform.get('password').value === user.password);
    user !== undefined ? correct = true: correct = false;
    return correct;
  }

}
