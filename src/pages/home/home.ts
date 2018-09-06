import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  title ="Hi My Name is Jayant";

  constructor(public navCtrl: NavController) {

  }

}
