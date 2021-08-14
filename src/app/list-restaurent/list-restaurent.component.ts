import { Component, OnInit } from '@angular/core';
import {CommonService } from '../common.service';
@Component({
  selector: 'app-list-restaurent',
  templateUrl: './list-restaurent.component.html',
  styleUrls: ['./list-restaurent.component.css']
})
export class ListRestaurentComponent implements OnInit {
public collection:any;
  constructor(private CommonService:CommonService) { }

  ngOnInit(): void {
    this.CommonService.getRestoList().subscribe((result)=>{
      this.collection= result;
      console.log(this.collection)
    });
  }

}
