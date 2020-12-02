import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.service';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-viewuser',
  templateUrl:'./viewuser.component.html',
  styleUrls: ['./viewuser.component.css']
})
export class ViewuserComponent implements OnInit {


   myData:any={};


  constructor(private ar:ActivatedRoute, private ts:TestService) { }



  ngOnInit(): void 
  {
      this.ar.params.subscribe((data)=>{
        // console.log("data..................",data);
        
        this.ts.getData().subscribe((totaldata)=>{
          // console.log("data1/.........",data1);
          let details
          totaldata.filter(function(filtereddata){

            if (data.id == filtereddata.id){
               details= filtereddata ;
              
            }
          })
          if(details){
            this.myData=details

          }

        })
      })
  }



}