import {Component, OnInit} from '@angular/core';
import {GlobalService} from "../../global.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  items = [ 1, 2 , 3 ,4, 5 ]
    constructor(public globalService:GlobalService) { }

    ngOnInit(): void {
    if(this.globalService.popularCurrencies){
      this.globalService.popularCurrencies.subscribe((res:any)=>{
        console.log(res)
      })
    }
    }


}
