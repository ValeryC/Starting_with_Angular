import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

User = {
  name : 'Doe',
  firstName : 'John',
  age : 25,
  quote : '',
  photo : 'https://randomuser.me/api/portraits/lego/2.jpg'
};

  constructor() { }

  ngOnInit(): void {
  }
  public show:boolean = false;
  public buttonName:any = 'Afficher/Masquer âge';



  toggle() {
    this.show = !this.show;

    // CHANGE THE NAME OF THE BUTTON.
    if(this.show)  
      this.buttonName = this.User.age;
    else
      this.buttonName = "Afficher/Masquer âge";
  
}

}
