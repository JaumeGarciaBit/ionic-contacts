import { Injectable, OnInit } from '@angular/core';
import * as data from "../../../assets/contacts.json";
import { Contact } from '../interfaces/contact';

import { Plugins} from "@capacitor/core"

const {Storage} = Plugins;

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  contacts : Contact[]

  constructor() 
  {
    let l_data : any = data;
    this.contacts = l_data.default;

  }

  async getContactsFromStorage():Promise<Contact[]>
  {
    const l_result = await Storage.get({key:'localContacts'});

    return JSON.parse(l_result.value);
  }


  getData()
  {
    return this.contacts;
  }
  addData(c : Contact)
  {
    this.contacts.push(c);
  }

  getDataById(id : string)
  {
    let l_array : any[] = data;
    let l_result = l_array.find(e => e.id == id);

    return l_result;
  }
}
