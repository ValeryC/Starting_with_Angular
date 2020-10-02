import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MonComposantComponent } from './mon-composant/mon-composant.component';
import { MonComposant2Component } from './mon-composant2/mon-composant2.component';
import { MonComposant3Component } from './mon-composant3/mon-composant3.component';
import { MonComposant4Component } from './mon-composant4/mon-composant4.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    MonComposantComponent,
    MonComposant2Component,
    MonComposant3Component,
    MonComposant4Component,
    UserProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
