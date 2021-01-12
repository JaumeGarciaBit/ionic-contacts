import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
})
export class FormPage implements OnInit {

  constructor(private mc : ModalController) { }

  ngOnInit() {
  }


  dismissModal()
  {
    this.mc.dismiss({
      'dismissed': true
    });
  }
}
