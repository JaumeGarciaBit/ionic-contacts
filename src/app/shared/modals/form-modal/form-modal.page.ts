import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { Contact } from '../../interfaces/contact';

@Component({
  selector: 'app-form-modal',
  templateUrl: './form-modal.page.html',
  styleUrls: ['./form-modal.page.scss'],
})
export class FormModalPage{
  newContact: FormGroup;
  imageUrl: string = '../../../assets/avatar.png';

  constructor(private mc : ModalController, private fb : FormBuilder)
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
  }

  addPhoto()
  {
    this.imageUrl ='https://miro.medium.com/fit/c/160/160/1*G7q_5Pl-nZ0fYeWhfaliDA.png';
  }

  logForm()
  {
    let l_contact : Contact = this.newContact.value;
    l_contact.image = this.imageUrl;
    console.log(l_contact);
  }
}
