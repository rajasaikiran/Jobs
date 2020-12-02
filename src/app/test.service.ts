import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestService {

//injected httpClient object  
  constructor(public hc:HttpClient) { }
  // taking all the data
  getData():Observable<any[]>
  {
    // return this.hc.get<any[]>('https://jsonplaceholder.typicode.com/todos/1')
  // return this.hc.get<any[]>('https://jobs.github.com/positions.json')
  // return this.hc.get<any[]>('https://jsonplaceholder.typicode.com/photos')
  return this.hc.get<any[]>('assets/data.json')
  }


   // read data from single user

      singleUserData(id):Observable<any[]>{
  //   return this.hc.get<any>(`https://jsonplaceholder.typicode.com/photos/${id}`)
        return this.hc.get<any[]>(`assets/data.json/${id}`)
        // return this.hc.get<any>("https://jsonplaceholder.typicode.com/photos/+id")
    }
}
