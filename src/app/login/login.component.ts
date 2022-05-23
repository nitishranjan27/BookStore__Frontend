import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from '../Services/adminServices/admin.service';
import { UserService } from '../Services/userServices/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder,private user: UserService,private admin:AdminService,private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      emailId: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
  onSubmit() {
    this.submitted = true;
    console.log("inputs", this.loginForm.value);
    let data = {
      emailId: this.loginForm.value.emailId,
      password: this.loginForm.value.password
    }
    if (this.loginForm.value.emailId != 'admin@bookstore.com') {
      console.log("User Login Successfully", this.loginForm.value);
      
      this.user.login(data).subscribe((res: any) => {
        console.log(res);
        this.router.navigateByUrl('/dashboard')
      })
    }
    else {
      console.log("Admin login Successfully", this.loginForm.value);
      
      this.admin.admin(data).subscribe((res: any) => {
        console.log(res);
        this.router.navigateByUrl('/dashboard')
      })
    }

  }

}
