import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
// const  profiles = require('../../assets/data/profiles.json');
import * as profiles from '../../assets/data/profiles.json';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  profiles:any = (profiles as any).default;
  constructor(private router:Router) { }

  ngOnInit(): void {
    console.log(profiles);
    setInterval(()=>this.shuffle(this.profiles),1800000);
  }
  shuffle(array:any[]) {
    var m = array.length, t, i;

    // While there remain elements to shuffle…
    while (m) {

      // Pick a remaining element…
      i = Math.floor(Math.random() * m--);

      // And swap it with the current element.
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }

    return array;
  }
}
