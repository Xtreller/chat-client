import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dummy',
  templateUrl: './dummy.component.html',
  styleUrls: ['./dummy.component.scss']
})
export class DummyComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
    let a = document.getElementById('trigger') as HTMLElement;
    a.click();

    setTimeout(()=>this.router.navigate(['/']),1500)
  }

}
