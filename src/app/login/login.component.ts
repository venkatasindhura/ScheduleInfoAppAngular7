import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
username = 'Sindhu';
password = '';
errorMessage = 'Invalid Credentials';
invalidlogin = false;
//DI
  constructor(private router:Router, private route:ActivatedRoute,private hardcodedauthenticationservice:HardcodedAuthenticationService) { }
  ngOnInit() {
    
  }
  handleLogin(){
    console.log(this.username);
    // if(this.username ==='Sindhu'&& this.password ==='sindhu')
    if(this.hardcodedauthenticationservice.authenticate(this.username,this.password)){
      //redirect to welcome page
      this.router.navigate(['welcome',this.username])
      this.invalidlogin = false
    }else{
      this.invalidlogin = true
    }
  }
}
