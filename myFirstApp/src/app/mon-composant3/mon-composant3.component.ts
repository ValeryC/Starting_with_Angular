import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mon-composant3',
  templateUrl: './mon-composant3.component.html',
  styleUrls: ['./mon-composant3.component.scss']
})
export class MonComposant3Component implements OnInit {
  
  nom = "Bob";

  imageSrc = "https://via.placeholder.com/350x150";

  constructor() { }

  ngOnInit() {
  }

  direBonjour() {
    console.log("bonjour");
  }
}
