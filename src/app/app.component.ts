import {Component, OnInit} from '@angular/core';
import {GlobalService} from "./global.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Currency_Exchanger';

  constructor(private globalService:GlobalService) {
  }
  ngOnInit(): void {
    this.globalService.getSymbols().subscribe((res:any)=>{
      this.globalService.currencies = Object?.keys(res.symbols).map((key) => ({ key, value: res.symbols[key] }))
    })
  }

}
