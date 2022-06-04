import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm:FormGroup
  constructor(private fb:FormBuilder,private userService:UserService,private snackbar:MatSnackBar) {
    this.registerForm = this.fb.group({
      email:['',[Validators.required,Validators.email]],
      phone:['',Validators.required],
      password:['',Validators.required]
    })
   }

  ngOnInit(): void {
  }
  onSubmit(){
    if(this.registerForm.valid){
      this.userService.register(this.registerForm.value).subscribe((data:any)=>{
        if(data[0] == 'success'){
          this.snackbar.open(data[0],'',{duration:2500})
        }
      });
    }
    else{
      this.snackbar.open('Моля попълнете всички полета!','',{duration:2500});
    }
  }

}
