import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {GlobalService} from "../../global.service";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit{
  currency: any
  view: any[] = [700, 400];
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  gradient: boolean = false;
  showLegend: boolean = true;
  showXAxisLabel: boolean = true;
  showYAxisLabel: boolean = true;

  chartData = [
    {
      "name": "USD",
      "series": [
        {
          "name": "May",
          "value": 1.322891,

        },
        {
          "name": "June",
          "value": 1.423,

        },
        {
          "name": "July",
          "value": 1.234,

        }
      ]
    },    {
      "name": "AUD",
      "series": [
        {
          "name": "May",
          "value": 1.278047,

        },
        {
          "name": "June",
          "value": 1.45,

        },
        {
          "name": "July",
          "value": 1.6215,
        }
      ]
    },{
      "name": "CAD",
      "series": [
        {
          "name": "May",
          "value": 1.302303,

        },
        {
          "name": "June",
          "value": 1.299083,

        },
        {
          "name": "July",
          "value": 1.5,
        }
      ]
    },
  ]

  colorScheme :any= {
    domain: ['#5AA454', '#A10A28', '#C7B42C']
  };
  constructor(private activateRoute: ActivatedRoute , private globalService:GlobalService) {

  }

  ngOnInit(): void {
    this.activateRoute.queryParams.subscribe((params:any) => {
      this.currency = this.globalService.currencies.filter((item:any)=>item.key === params.from)
    })
  //   this.globalService.getHistoricalRates('2021-03-16' ,this.currency[0]?.key , 'Usd').subscribe((res:any)=>{
  //     console.log(res)
  //   })
  }


}
