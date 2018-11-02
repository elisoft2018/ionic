import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { GeneralProvider } from '../../providers/general/general';
import { Camera, CameraOptions } from '@ionic-native/camera';

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

  comentarios: string
  image;

  constructor(public navCtrl: NavController, public general: GeneralProvider, public camera: Camera) {

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
  goToList() {
    this.navCtrl.push('ListMasterPage');
  }

  getPicture() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      this.image = imageData;
      let base64Image = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      // Handle error
    });
  }



}
