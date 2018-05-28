import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable, Subject, pipe } from 'rxjs';
import { map, takeUntil, tap } from 'rxjs/operators';

@Injectable()

export class RequestsServise{

    constructor(private http: HttpClient){}

    log(){
        console.log('работает');
    }


    getContacts(){
        return this.http.get('http://localhost:3000/users')
                        map((res: Response) =>res.json());
    }
    deleteContacts(id){
        return this.http.delete('http://localhost:3000/users/'+ id)
                        map((res: Response) =>res.json());
    }
    newContacts(data: object){
        return this.http.post('http://localhost:3000/users', data)
                        map((res: Response) =>res.json());
    }
    changeContact(data: any, id: any){
        return this.http.put('http://localhost:3000/users/' + id, data)
                        map((res: Response) =>res.json());
    }
    
}