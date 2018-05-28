import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Params } from '@angular/router';
import { RequestsServise } from '../requests.service';

@Component({
  selector: 'app-app-contact',
  templateUrl: './app-contact.component.html',
  styleUrls: ['./app-contact.component.scss']
})
export class AppContactComponent implements OnInit {

  contactData: any;
  pageValue: any;
  pageArrey = [];
  curentPage: number
  curentList = [];
  editableContact: object;
  id: number;

  madeCurentList(){
    this.curentList = []
    let val = this.contactData.length - (this.curentPage - 1)*10 > 10 ? 10 : this.contactData.length - (this.curentPage - 1)*10
    console.log(val);
    
    for (let index = 0; index < val; index++) {
      this.curentList.push(
        this.contactData[(this.curentPage - 1) *10 + index]
      )      
    }    
  }

  changePage(event: Event){
    // console.log(event.target.innerHTML)    
    this.curentPage = +(<HTMLBaseElement>event.target).innerHTML
    this.madeCurentList()
  }

  getContact(event: object){
    console.log('сработало');
    this.subscribID()    
  }

  makePageValue(){
    this.pageArrey = []
    while (this.pageValue !== 0) {
      this.pageArrey.push({})
      this.pageValue--
    }
  }
  subscribID(){
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id']
      this.curentPage = this.id
      this.loadPage()
    })
  }
  loadPage(){
    this.requestServise.getContacts()
    .subscribe( data =>{
      this.contactData = data
      this.pageValue = Math.ceil(this.contactData.length / 10)
      console.log(this.contactData.length)                       
      this.makePageValue()
      this.madeCurentList() 
    })
  }

  constructor( private http: HttpClient,
               private route: ActivatedRoute,
               private requestServise: RequestsServise ) { }
  
  ngOnInit() {
    this.subscribID()

    // this.http.get('http://localhost:3000/users', { observe: 'response' })
    //     .subscribe( data => {
      
    // })    
  }

}
