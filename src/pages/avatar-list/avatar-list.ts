import { Component } from '@angular/core';
import { IonicPage, NavController} from 'ionic-angular';
import { GeneralProvider } from '../../providers/general/general';

/**
 * Generated class for the AvatarListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-avatar-list',
  templateUrl: 'avatar-list.html',
})
export class AvatarListPage {

 comentarios:string

  constructor(public navCtrl: NavController, public general: GeneralProvider) {

    this.general.get('comments').subscribe(
      (data) => {
        console.log(data)
      },
      (error) => {
        console.log(error)
      })


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AvatarListPage');
  
  }
  goToList(){
  this.navCtrl.push('ListMasterPage');
}
}
