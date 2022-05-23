import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../Services/userServices/user.service';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.scss']
})
export class ForgotpasswordComponent implements OnInit {
  forgotForm!: FormGroup;
  submitted = false;
  
  constructor(private formBuilder: FormBuilder,private user : UserService) { }

  ngOnInit(): void {
    this.forgotForm = this.formBuilder.group({
      emailId: ['', [Validators.required, Validators.email]],
    })
  }
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.forgotForm.invalid) {
      console.log("invalid data");
    }
    else{
      console.log("Forgot Password Successfully");
      let reqData={
        emailId:this.forgotForm.value.emailId
      }
      this.user.forgot(reqData).subscribe((response:any)=> {
        console.log(response);
        
      })

    }

    // display form values on success
    // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.forgotForm.value, null, 4));
}

}
