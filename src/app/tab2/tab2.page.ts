import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { QrcodeModalComponent } from '../qrcode-modal/qrcode-modal.component';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  constructor(
    private modalCtrl: ModalController
  ) {}

  public async open() {
    const modal = await this.modalCtrl.create({
      component: QrcodeModalComponent,
      animated: false
    });

    await modal.present();
  }
}
