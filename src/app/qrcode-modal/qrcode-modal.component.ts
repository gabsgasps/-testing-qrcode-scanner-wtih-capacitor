import { Component, OnInit } from '@angular/core';
import { Plugins } from '@capacitor/core';
import { ModalController } from '@ionic/angular';
const { CapacitorQRScanner } = Plugins;

@Component({
  selector: 'app-qrcode-modal',
  templateUrl: './qrcode-modal.component.html',
  styleUrls: ['./qrcode-modal.component.scss'],
})
export class QrcodeModalComponent implements OnInit {
  data: any;

  constructor(public modalCtrl: ModalController) {}

  async ngOnInit() {}

  async scan() {
    let result = await CapacitorQRScanner.scan();
    console.log('RESULT', result);
  }
}
