import { RequestsServise } from './../requests.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';


@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
  animations: [
    trigger('showContact',[
      state('start', style({
        height:'1px',
        display: 'none',
        opacity: "0"
      })),
      state('end', style({
        height:'250px',
        display: 'block',
        opacity: "1"
      })),
      transition('start => end', animate( 500 ))
      transition('end => start', animate( 500 ))
    ])
  ]
})
export class ItemComponent implements OnInit {

  constructor( private requestsServise: RequestsServise) { }

  @Input() contactItem:{
    id: string,
    name: string,
    phone: string,
    email: string,
    company: string,
    address: string
  }
  @Output() onEditContact = new EventEmitter<{text: string}>();
  delContact(){
    this.requestsServise.deleteContacts(this.contactItem.id)
                        .subscribe((res: Response) => {
                          console.log(res);                              
                        })
    this.onEditContact.emit({text: 'del'})
  }
  contactState = 'start'

  showList(list){
    this.contactState == 'end' ? this.contactState = 'start' : this.contactState = 'end'
  }
  // initEdit(){
  //     this.onEditContact.emit({
  //     id:this.contactItem.id,
  //     name: this.contactItem.name,
  //     phone: this.contactItem.phone,
  //     email: this.contactItem.email,
  //     company:this.contactItem.company,
  //     address: this.contactItem.address 
  //   })        
  // }
  


  ngOnInit() {
  }

}
