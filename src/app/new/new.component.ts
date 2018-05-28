import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RequestsServise } from './../requests.service';


@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewComponent implements OnInit {


      name: ""
      phone:""
      email:""
      company:""
      address:""



  constructor( 
    private http: HttpClient,
    private route: ActivatedRoute,
    private requestService: RequestsServise
  ) {}

  newContact(){
    let newContactData = {
      name: this.name,
      phone: this.phone,
      email: this.company,
      company: this.email,
      address: this.address
    }
    this.requestService.newContacts(newContactData)
                            .subscribe((res) => {
                              console.log(res);                              
                            })
    // console.log(newContactData)    
  }

  ngOnInit() {
    console.log('init')
  }

}
