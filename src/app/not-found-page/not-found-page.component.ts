import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-not-found-page',
  templateUrl: './not-found-page.component.html',
  styleUrls: ['./not-found-page.component.scss'],
})
export class NotFoundPageComponent implements OnInit {
  constructor(private router: Router, private snackbar: MatSnackBar) {}

  ngOnInit(): void {
    this.snackbar.open('Страницата не бе намерена. Ще бъдете пренасочени!','',{ duration: 2500 });
    setTimeout(() => {
      this.router.navigate(['/']);
    },3000);
  }
}
