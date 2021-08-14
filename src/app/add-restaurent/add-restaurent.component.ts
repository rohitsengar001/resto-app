import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CommonService } from '../common.service';
@Component({
  selector: 'app-add-restaurent',
  templateUrl: './add-restaurent.component.html',
  styleUrls: ['./add-restaurent.component.css']
})
export class AddRestaurentComponent implements OnInit {
addRestaurant=new FormGroup({
  name:new FormControl(''),
  Address:new FormControl(''),
  email:new FormControl('')
})
constructor(private resto:CommonService) { }

  ngOnInit(): void {
  }
  CreateResto(){
    //console.log(this.addRestaurant.value);
    this.resto.addResto(this.addRestaurant.value).subscribe((result)=>{
      console.log("Get data from service",result)
    })
  }
}
