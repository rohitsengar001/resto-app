import { ClassGetter } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import {CommonService } from '../common.service';
@Component({
  selector: 'app-list-restaurent',
  templateUrl: './list-restaurent.component.html',
  styleUrls: ['./list-restaurent.component.css']
})
export class ListRestaurentComponent implements OnInit {
collection
  constructor(private CommonService:CommonService) { }

  ngOnInit() {
    // this.getdata()
    this.CommonService.getRestoList().subscribe((result:any)=>{
     this.collection= result;
     console.log(this.collection)
     console.log(result)
   });
   console.log(this.collection)
  }


 

}
