import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-contact-create',
  templateUrl: './contact-create.component.html',
  styleUrls: ['./contact-create.component.css']
})
export class ContactCreateComponent implements OnInit {
  
  contact : {id: any, name: any, description: any, email: any} = {id: null, name: "", description: "", email: ""};

  alertmsg: any;

  constructor(public dataservice: DataService) { }

  ngOnInit(): void {
  }

createContact(){
  console.log(this.contact);
  this.dataservice.createContacts(this.contact);
  this.contact = {id: null, name: "", description: "", email: ""};
  this.alertmsg ="Data Insert Successfully";


}


}
