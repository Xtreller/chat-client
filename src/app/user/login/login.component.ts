import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup
  constructor(private fb:FormBuilder,
    private snackbar:MatSnackBar,
    private router:Router,
    private userService:UserService) {
      this.loginForm = this.fb.group({
        email:['',Validators.required],
        password:['',Validators.required]
      })
     }

  ngOnInit(): void {
  }
  onSubmit(){
    if(this.loginForm.valid){
      this.userService.login(this.loginForm.value).subscribe((data:any)=>{
        console.log(data);
        if(data.result == 'success'){
          localStorage.setItem('TOKEN',data.token);
          localStorage.setItem('USER_ID',data.user.id);
          localStorage.setItem('USER_EMAIL',data.user.email);
          //ToDo ...
          // localStorage.setItem('USER_ROLE',data.user.role_id);

          this.snackbar.open('Welcome ' + data.user.email,'',{duration:2500})
          setTimeout(()=>this.router.navigate(['/chats']),2000);
        }
      });
    }
    else{
      this.snackbar.open('Моля попълнете двете полета!','',{duration:2500});
    }
  }

}
