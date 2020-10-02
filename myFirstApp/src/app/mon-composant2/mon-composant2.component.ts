import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mon-composant2',
  templateUrl: './mon-composant2.component.html',
  styleUrls: ['./mon-composant2.component.scss']
})
export class MonComposant2Component implements OnInit {

  nom = "Bob";

  imageSrc = "https://via.placeholder.com/350x150";

  constructor() { }

  ngOnInit() {
  }
}

