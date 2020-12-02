import { Component, OnInit } from '@angular/core';
import {TestService} from '../test.service'
import { Router} from '@angular/router'

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {

// take it as empty

   TestData:any=[];

  constructor( public rt:Router, public ts:TestService) { }


  

  ngOnInit(): void {
  this.ts.getData().subscribe(
    (data)=>{this.TestData=data
    // console.log("jobcomponent dat.....................",this.TestData);
    
   },
    (err)=>{console.log(err)}
  )
  }

  clickhere(id){

    // console.log("id.......",id);
    this.rt.navigateByUrl("/viewuser/"+ id)
    // now navigating through url menstion url params in routhing module =>component path

    
  }

}
