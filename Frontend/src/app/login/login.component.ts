import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { SnackbarService } from '../services/snackbar.service';
import { UserService } from '../services/user.service';
import { GlobalConstants } from '../shared/global-constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  hide = true;
  loginForm:any = FormGroup;
  responseMessage:any;
  constructor(private formBuilder:FormBuilder,
      private router:Router,
      private userService:UserService,
      private snackbarService:SnackbarService,
      public dialogRef:MatDialogRef<LoginComponent>,
      //private ngxService:NgxUiLoaderService,
    ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email:[null , Validators.required , Validators.pattern(GlobalConstants.emailRegex)],
      password:[null , Validators.required]
    })
  }


  handleSubmit(){
    //this.ngxService.start();
    var formDate = this.loginForm.value;
    var data = {
      email: formDate.email,
      password: formDate.password  
    }

    this.userService.login(data).subscribe((response:any)=>{
      //this.ngxService.stop();
      this.dialogRef.close();
      localStorage.setItem('token' , response.token);
      //alert("Successfully Logged in");
      this.router.navigate(['/food-hub/dashboard']);
    },(error: { error: { message: any; }; })=>{
      //this.ngxService.stop();
      if(error.error?.message){
        this.responseMessage = error.error?.message;
      }else{
        this.responseMessage = GlobalConstants.genericError;
      }
      // alert(this.responseMessage + " " + GlobalConstants.error);
      this.snackbarService.openSnackBar(this.responseMessage , GlobalConstants.error);
    })

  }
}