import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  loginForm: FormGroup;
  constructor(private loginService: LoginService, private router: Router, private FormBuilder: FormBuilder) { 
    this.loginForm = this.FormBuilder.group({
      email: ['email@email.com', [Validators.email, Validators.required]],
      password: ['',[Validators.required, Validators.minLength(6)]]
    })
  }

  ngOnInit(): void {
  }

  userModel = new User("", "");
  mensagem = ""

  onSubmit(){
    console.log(this.userModel)
    this.loginService.login(this.userModel).subscribe((response)=>{
      this.router.navigateByUrl("")
    }, (respostaErro) =>{
      this.mensagem = respostaErro.error
      console.log(this.mensagem)
      
    })
  }

}
