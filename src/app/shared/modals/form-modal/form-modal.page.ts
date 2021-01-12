import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { Contact } from '../../interfaces/contact';
import { PhotoService } from '../../../shared/services/photo.service';
import { ContactsService } from '../../services/contacts.service';


import { Filesystem, FilesystemDirectory, Plugins} from "@capacitor/core"

const {Storage} = Plugins;

@Component({
  selector: 'app-form-modal',
  templateUrl: './form-modal.page.html',
  styleUrls: ['./form-modal.page.scss'],
})
export class FormModalPage{
  newContact: FormGroup;
  imageUrl: string = '../../../assets/avatar.png';

  constructor(private mc : ModalController, private fb : FormBuilder, public ps : PhotoService, private cs : ContactsService)
  {
    this.newContact = this.fb.group
    ({
        firstName:['', Validators.required],
        lastName:['', Validators.required],
        email:['', Validators.required],
        phone:['', Validators.required],
    });
  }


  dismiss()
  {
    this.mc.dismiss();
    this.ps.clearPhotos();
  }

  addPhoto()
  {
    this.ps.addNewToGallery();
  }

  async logForm()
  {
    let l_contact : Contact = this.newContact.value;
    l_contact.filepath = this.ps.photos[0]? this.ps.photos[0].filepath : '';
    l_contact.image = this.imageUrl;
  
    if(l_contact.filepath != '')
    {
      const readFile = await Filesystem.readFile({
        path: l_contact.filepath,
        directory: FilesystemDirectory.Data
      });
      // Web platform only: Load the photo as base64 data
      l_contact.image = `data:image/jpeg;base64,${readFile.data}`;
    }

    console.log(l_contact);

    this.cs.addData(l_contact);
    await this.saveLocalStorage(l_contact);
    this.dismiss();
  }

  async saveLocalStorage(c : Contact)
  {
    let l_result : any = await this.cs.getContactsFromStorage();
    if(l_result)
    {
      l_result.push(c);
      return Storage.set({key:'localContacts', value: JSON.stringify(l_result)});
    }
    else
    {
      return Storage.set({key:'localContacts', value: JSON.stringify([c])});
    }    
  }
}
