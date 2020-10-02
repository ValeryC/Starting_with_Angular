import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mon-composant4',
  templateUrl: './mon-composant4.component.html',
  styleUrls: ['./mon-composant4.component.scss']
})
export class MonComposant4Component implements OnInit {

   
  nom = "Bob";

  imageSrc = "https://via.placeholder.com/350x150";

  constructor() { }

  ngOnInit() {
  }

  direBonjour() {
    console.log("bonjour");
  }
}
