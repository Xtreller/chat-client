import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
// const  profiles = require('../../assets/data/profiles.json');
import * as profiles from '../../assets/data/profiles.json';

interface Profile {
  _id: "63601a19e1744257a31ce71b",
  online: boolean,
  picture: string,
  age: number,
  eyeColor: string,
  name: string,
  gender: string
}
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
  animations: [
    trigger('simpleFadeAnimation', [
      state('in', style({ opacity: 1, height: 100 + 'vh' })),
      transition(':enter', [
        style({ opacity: 0, height: 0 + 'vh' }),
        animate(200),
      ]),
      transition(
        ':leave',
        animate(400, style({ opacity: 0, height: 0 + 'vh' }))
      ),
    ]),
  ]
})
export class WelcomeComponent implements OnInit {
  profiles: any = (profiles as any).default;
  currentActiveTab: number | null = null;
  paletteColour: string = 'accent';
  filterProfiles: any = this.profiles;
  constructor(private router: Router) { }

  ngOnInit(): void {
    console.log(profiles);
    setInterval(() => this.shuffle(this.filterProfiles), 1800000);
  }
  shuffle(array: any[]) {
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
  change(index: number) {
    this.filterProfiles = this.profiles;
    if (this.currentActiveTab == index) {
      this.currentActiveTab = null;
      this.filterProfiles = this.profiles;
    }
    else {
      this.currentActiveTab = index;
      switch (this.currentActiveTab) {
        case 0:
         this.filterProfiles =  this.filterProfiles.filter((prof: Profile) => prof.age > 20 && prof.age <= 25);
          break;
        case 1:
         this.filterProfiles =  this.filterProfiles.filter((prof: Profile) => prof.age > 25 && prof.age <= 35);
          break;
        case 2:
         this.filterProfiles = this.filterProfiles.filter((prof: Profile) => prof.age > 35 && prof.age <= 45);
          break;
        case 3:
         this.filterProfiles =  this.filterProfiles.filter((prof: Profile) => prof.gender == 'male');
          break;
        case 4:
         this.filterProfiles =  this.filterProfiles.filter((prof: Profile) => prof.gender == 'female');
          break;
        default:
          this.filterProfiles = this.profiles;
          break;
      }
      console.log(this.currentActiveTab,this.filterProfiles)
    }
  }
}
