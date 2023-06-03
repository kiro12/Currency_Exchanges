import {Component, Input, OnInit, Output} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {NgForOf, NgIf} from "@angular/common";
import {ActivatedRoute, Router, RouterLink} from "@angular/router";
import {GlobalService} from "../../global.service";

@Component({
  selector: 'app-currecy-exchanger',
  templateUrl: './currecy-exchanger.component.html',
  styleUrls: ['./currecy-exchanger.component.scss'],
  imports: [
    FormsModule,
    NgForOf,
    NgIf,
    RouterLink
  ],
  standalone: true
})
export class CurrecyExchangerComponent implements OnInit{
   @Input() type: string = 'home';
   fromCurrency: string = 'EUR';
   toCurrency: string = 'USD';
   rate: string | undefined;
   amount: number = 0;
   convertedAmount:any;
   @Output() currency: any;
  arrayOfCurrencies: any[] = [];
  isConverted: boolean = false;
  convertedFrom:string = 'EUR'
  convertedTo:string = 'USD'
  constructor(public globalService:GlobalService , private activateRoute: ActivatedRoute , private router: Router){
  }
  ngOnInit(): void {
    if(this.router.url.includes('about')){
    this.activateRoute.queryParams.subscribe((params:any) => {
      if(Object.keys(params).length !== 0){
        console.log(params)
        this.fromCurrency = params.from ? params.from : 'EUR'
        this.toCurrency = params.to ? params.to : 'USD'
        this.amount = params.amount ? params.amount : 1
        this.convertAmount()
      }

    })
    }
    this.convertAmount(true)
  }
  convertAmount(hasAmount?:boolean){
    this.arrayOfCurrencies = []
    this.arrayOfCurrencies.push(this.toCurrency)
    for (let i = 0; i <= 7; i++) {
      if(this.globalService.currencies[i]?.key !== this.toCurrency){
        this.arrayOfCurrencies.push(this.globalService.currencies[i]?.key)
      }
    }
    this.globalService.getCurrencies(this.fromCurrency,this.arrayOfCurrencies).subscribe((res:any)=>{
      if(res.error){
        alert(res.error.type)
        return
      }
      this.convertedFrom = res.base
      this.convertedTo = this.toCurrency
      this.rate = (res.rates[this.toCurrency]).toFixed(2)
      if(hasAmount){
        return;
      }
      this.convertedAmount = (res.rates[this.toCurrency] * this.amount).toFixed(2) + ' ' + this.toCurrency;
      const popularCurr = Object.keys(res.rates).map((key:any) => ({ key, value: (res.rates[key] * this.amount).toFixed(2) }))
      this.globalService.popularCurrencies.next({base:res.base , rates:popularCurr})
      this.isConverted = true;

    })
  }

}
