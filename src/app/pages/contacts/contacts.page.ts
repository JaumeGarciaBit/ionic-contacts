import { Component, OnInit } from '@angular/core';
import { Filesystem, FilesystemDirectory } from '@capacitor/core';
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


  constructor(public cs : ContactsService, private mc : ModalController) { }

  async ngOnInit()
  {
    let l_result : Contact[] = await this.cs.getContactsFromStorage();

    if(l_result)
    {
      l_result.forEach(async e => 
        {
          if(e.filepath != "")
          {
            const readFile = await Filesystem.readFile({
              path: e.filepath,
              directory: FilesystemDirectory.Data
            });
            // Web platform only: Load the photo as base64 data
              e.image = `data:image/jpeg;base64,${readFile.data}`;
          }
          else
            e.image = '../../../assets/avatar.png';
      

          this.cs.addData(e);
        });
    }
  }


  async openModal()
  {
    const l_modal = await this.mc.create
    ({
      component:FormModalPage
    });
    l_modal.present();
  }

}
