import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'mp-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
 userForm = new FormGroup({
   fullName : new FormControl('',[Validators.required]),
   email : new FormControl('',[Validators.required,Validators.email]),
   password: new FormControl('',[Validators.required]),
 })
  
  constructor(private router:Router,
    private authservice:AuthService) { 
    }
    const
    register(){
      this.authservice.register .subscribe((s=> this.router.navigate(['/login'])))
    }
  ngOnInit(): void {
  }

}
