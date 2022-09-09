import { Component, OnInit } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verification-code',
  templateUrl: './verification-code.component.html',
  styleUrls: ['./verification-code.component.scss']
})
export class VerificationCodeComponent implements OnInit {
  keyCodes = ['chat','ok','iskam'];
  constructor(private router:Router,private snack:MatSnackBar) { }

  ngOnInit(): void {
  }
  check(check:MatCheckboxChange){
    console.log(check.checked);
    this.snack.open('Верификацията е успешна! Пренасочване ...','',{duration:2500})
    setTimeout(()=>{this.router.navigate(['/openSms'])},2500)

  }

}
