import { Component, OnInit } from '@angular/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dummy',
  templateUrl: './dummy.component.html',
  styleUrls: ['./dummy.component.scss']
})
export class DummyComponent implements OnInit {
  mode: ProgressSpinnerMode = 'indeterminate';
  constructor(private router:Router) { }

  ngOnInit(): void {
    let a = document.getElementById('trigger') as HTMLElement;
    a.click();

  }

}
