import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RequestsServise } from './../requests.service';

@Component({
  selector: 'app-app-edit',
  templateUrl: './app-edit.component.html',
  styleUrls: ['./app-edit.component.scss']
})
export class AppEditComponent implements OnInit {

  constructor( private http: HttpClient,
               private route: ActivatedRoute,
               private requestService: RequestsServise
              ) { }

  contactData:{
    id: string,
    name: string,
    phone: string,
    email: string,
    company: string,
    address: string
  }
  

  id: number

  inputData = {
    name:"",
    phone:"",
    email:"",
    company:"",
    address:""
  }

  sendChanges(){   
    this.requestService.changeContact(this.inputData, this.id)
                          .subscribe((res: Response) => {
                            console.log(res);                              
                          })
  }

  subscribID(){
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id']
      this.getData()
    })
  }

  getData(){
    this.http.get('http://localhost:3000/users/' + this.id, { observe: 'response' })
    .subscribe( data => {
      this.contactData = JSON.parse(JSON.stringify(data.body))
      console.log(this.contactData);
      this.inputData.name = this.contactData.name
      this.inputData.phone = this.contactData.phone
      this.inputData.email = this.contactData.email
      this.inputData.company = this.contactData.company
      this.inputData.address = this.contactData.address
    })
  }
  


  ngOnInit() {    
    this.subscribID()    
  }
  onChange(){

  }

}
