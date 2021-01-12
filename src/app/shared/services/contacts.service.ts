import { Injectable } from '@angular/core';
import * as data from "../../../assets/contacts.json";

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor() {}
  getData()
  {
    let l_data : any = data;
    return l_data.default;
  }
  getDataById(id : string)
  {
    let l_array : any[] = data;
    let l_result = l_array.find(e => e.id == id);

    return l_result;
  }
}
