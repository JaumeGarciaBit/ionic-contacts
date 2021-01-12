import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Contact } from 'src/app/shared/interfaces/contact';
import { FormModalPage } from 'src/app/shared/modals/form-modal/form-modal.page';
import { ContactsService } from 'src/app/shared/services/contacts.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.page.html',
  styleUrls: ['./contacts.page.scss'],
})
export class ContactsPage implements OnInit {

  contacts : Contact[]

  constructor(private cs : ContactsService, private mc : ModalController) { }

  ngOnInit() 
  {
    this.contacts = this.cs.getData();
  }

  async openModal()
  {
    console.log("OPENING MODAL");
    const l_modal = await this.mc.create
    ({
      component:FormModalPage
    });
    l_modal.present();
  }

}
