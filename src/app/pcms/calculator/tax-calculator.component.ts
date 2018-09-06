import { Component, OnInit } from '@angular/core';
import { TaxBreakdown } from '../pcms-tax.service';

@Component({
    selector: 'tax-calculator',
    templateUrl: './tax-calculator.component.html',
    styleUrls: ['./tax-calculator.component.css']
})
export class TaxCalculatorComponent {

    _annual: boolean = true;

    taxBreakdown: TaxBreakdown;


    constructor() {}
}

